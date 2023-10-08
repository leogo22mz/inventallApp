package com.leo.inventall.entity.services;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.leo.inventall.entity.dao.IInventallDao;
import com.leo.inventall.entity.models.Inventall;

@Service
public class IInventallServiceImpl implements IInventallService {

	@Autowired
	private IInventallDao inventallDao;
	
	@Override
	public Inventall get(long id) {
		return inventallDao.findById(id).get();
	}
	
	@Override
	public List<Inventall> getAll(){
		return (List<Inventall>) inventallDao.findAll();
	}
	
	@Override
	
	public void post(Inventall inventall) {
		inventallDao.save(inventall);
	}
	
	@Override
	public void put(Inventall inventall, long id) {
		inventallDao.findById(id).ifPresent((x)->{
			inventall.setId(id);
			inventallDao.save(inventall);
		});
	}
	@Override
	public void delete(long id) {
		inventallDao.deleteById(id);
	}
}
