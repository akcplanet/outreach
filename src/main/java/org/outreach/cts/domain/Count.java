package org.outreach.cts.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Entity
@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE, fieldVisibility = JsonAutoDetect.Visibility.ANY)
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
@JsonIgnoreProperties({ "id" })
public class Count extends BaseModel<String> implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@JsonProperty("id")
	private String id;
	@Column(name = "COUNT")
	@JsonProperty("count")
	private Long count;

	public Count() {

	}

	public Count(String id, Long count) {
		super();
		this.id = id;
		this.count = count;
	}

	@Column(name = "ID")
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}

	public static Count EMPTY_RESULT() {
		return new Count("count", 0L);
	}

	@Override
	public String toString() {
		return "Count [id=" + id + ", count=" + count + "]";
	}

}
