package org.outreach.cts.aws;

import java.io.InputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.ClientConfiguration;
import com.amazonaws.Protocol;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.ResponseHeaderOverrides;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;

@Component
public class AWSS3UploadService {

	private @Value("${aws.bucketName}") String bucketName;

	private final String SUFFEX = "/";

	public void uploadS3(InputStream file, String id, String objectPath) throws Exception {
		try {
			ClientConfiguration clientConfig = new ClientConfiguration();
			clientConfig.setProtocol(Protocol.HTTPS);
			AmazonS3Client s3 = new AmazonS3Client(clientConfig);
			String fileName = objectPath + SUFFEX + id;
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setSSEAlgorithm(ObjectMetadata.AES_256_SERVER_SIDE_ENCRYPTION);
			metadata.setCacheControl("No-cache");
			PutObjectRequest putObject = new PutObjectRequest(this.bucketName, fileName, file, metadata);
			putObject.setCannedAcl(CannedAccessControlList.BucketOwnerFullControl);
			s3.putObject(putObject);
		} catch (AmazonS3Exception exs3) {

		} catch (AmazonServiceException ase) {

		} catch (AmazonClientException ace) {

		}
	}

	public InputStream getS3PDF(String id, String objectPath) throws Exception {
		S3ObjectInputStream is = null;
		try {
			ClientConfiguration clientConfig = new ClientConfiguration();
			clientConfig.setProtocol(Protocol.HTTPS);
			AmazonS3Client s3 = new AmazonS3Client(clientConfig);
			String fileName = objectPath + SUFFEX + id;
			GetObjectRequest rangeObjectRequest = new GetObjectRequest(this.bucketName, fileName);
			ResponseHeaderOverrides responseHeaders = new ResponseHeaderOverrides();
			responseHeaders.setCacheControl("No-cache");
			rangeObjectRequest.setResponseHeaders(responseHeaders);

			S3Object object = s3.getObject(rangeObjectRequest);
			if (object != null) {
				is = object.getObjectContent();
			}

		} catch (AmazonS3Exception e) {
			if (e.getStatusCode() == 404 || e.getStatusCode() == 301) {

			} else {
				throw e;
			}

		} catch (AmazonServiceException ase) {
			throw ase;
		} catch (AmazonClientException ace) {
			throw ace;
		}
		return is;
	}
}
