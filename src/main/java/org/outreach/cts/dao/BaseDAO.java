package org.outreach.cts.dao;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.outreach.cts.domain.Count;
import org.outreach.cts.exception.DAOException;
import org.outreach.cts.exception.ErrorCode;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository("basedao")
public class BaseDAO {

	@PersistenceContext(unitName = "OUTREACHDB")
	private EntityManager em;

	public EntityManager getEntityManager() {
		return this.em;
	}

	public void setEntityManager(EntityManager em) {
		this.em = em;
	}

	protected final int batch_size = 20;

	@Transactional("outreachTxManager")
	public <T> T save(T t) {
		try {
			getEntityManager().persist(t);
			return t;
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}

	@Transactional("outreachTxManager")
	public <T> T update(T t) {
		try {
			getEntityManager().merge(t);
			return t;
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}

	@Transactional("outreachTxManager")
	public <T> void delete(T t) {
		try {
			getEntityManager().remove(t);
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}

	@Transactional("outreachTxManager")
	public <T> T get(Class<T> claz, Serializable id) {
		try {
			return (T) getEntityManager().find(claz, id);
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional("outreachTxManager")
	public <T> List<T> getAll(Class<T> claz) {
		List<T> objects = null;
		try {
			String className = claz.getSimpleName();
			objects = getEntityManager()
					.createQuery("SELECT f FROM " + className + " f order by updated_on ASC, created_on DESC").getResultList();
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
		return objects;
	}

	@SuppressWarnings("unchecked")
	@Transactional("outreachTxManager")
	public <T> List<T> getAll(Class<T> claz, int page, int count) {
		List<T> objects = null;
		try {
			page = page - 1;
			String className = claz.getSimpleName();
			objects = getEntityManager().createQuery("SELECT f FROM " + className + " f").setMaxResults(count)
					.setFirstResult(page * count).getResultList();
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
		return objects;
	}

	@SuppressWarnings("rawtypes")
	public Long getCount(Class claz) {

		try {
			String className = claz.getSimpleName();
			Long ecount = (Long) getEntityManager().createQuery("SELECT count(*) FROM " + className + " f")
					.getSingleResult();
			return ecount;
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}

	public Count getCount(String query, boolean isNamed, List<Object> params) {

		try {
			Query dbQuery = (isNamed ? getEntityManager().createNamedQuery(query)
					: getEntityManager().createNativeQuery(query));
			int paramCounter = 1;
			if (params != null) {
				for (Object param : params) {
					dbQuery.setParameter(paramCounter++, param);
				}
			}
			Count ecount = (Count) dbQuery.getSingleResult();
			return ecount;
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}

	@SuppressWarnings("unchecked")
	@Transactional("outreachTxManager")
	public <T> List<T> getAll(String query, List<Object> params, boolean isNamed, int page, int count) {
		List<T> objects = null;
		try {
			Query dbQuery = (isNamed ? getEntityManager().createNamedQuery(query)
					: getEntityManager().createNativeQuery(query));
			if (count > 0) {
				dbQuery.setMaxResults(count);
			}
			if (page > 0) {
				dbQuery.setFirstResult(page * count);
			}
			int paramCounter = 1;
			if (params != null) {
				for (Object param : params) {
					dbQuery.setParameter(paramCounter++, param);
				}
			}
			objects = dbQuery.getResultList();

		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}

		return objects;
	}

	@SuppressWarnings("unchecked")
	@Transactional("outreachTxManager")
	public static <T> T getSingleResult(Query query) {
		query.setMaxResults(1);
		List<T> list = query.getResultList();
		if ((list == null) || (list.isEmpty())) {
			return null;
		}
		return (T) list.get(0);
	}

	@Transactional("outreachTxManager")
	public <T> Collection<T> saveBacth(Collection<T> t) {
		try {
			int i = 0;
			for (T t1 : t) {
				getEntityManager().persist(t1);
				if (i % batch_size == 0) {
					getEntityManager().flush();
					getEntityManager().clear();
					i++;
				}
			}
			return t;
		} catch (Exception ex) {
			throw new DAOException(ErrorCode.SM100, ex);
		}
	}
}
