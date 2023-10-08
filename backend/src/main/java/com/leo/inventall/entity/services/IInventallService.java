package com.leo.inventall.entity.services;

import java.util.List;

import com.leo.inventall.entity.models.Inventall;

public interface IInventallService {
	
	public Inventall get(long id);
	public List<Inventall> getAll();
	public void post(Inventall inventall);
	public void put(Inventall inventall, long id);
	public void delete(long id);

}
