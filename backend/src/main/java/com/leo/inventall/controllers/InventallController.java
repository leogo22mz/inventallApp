package com.leo.inventall.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.leo.inventall.entity.models.Inventall;
import com.leo.inventall.entity.services.IInventallService;

@RestController
@CrossOrigin(origins = "*")
public class InventallController {
    @Autowired
    IInventallService inventallService;

    @GetMapping("/inventall")
    public ResponseEntity<List<Inventall>> getAllInventall() {
        List<Inventall> inventallList = inventallService.getAll();
        return new ResponseEntity<>(inventallList, HttpStatus.OK);
    }

    @GetMapping("/inventall/{id}")
    public ResponseEntity<Inventall> getOne(@PathVariable(value = "id") long id) {
        Inventall inventall = inventallService.get(id);
        if (inventall != null) {
            return new ResponseEntity<>(inventall, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/inventall")
    public void post(@RequestBody Inventall inventall) {
        inventallService.post(inventall);
    }


    @PutMapping("/inventall/{id}")
    public ResponseEntity<Void> put(@RequestBody Inventall inventall, @PathVariable(value = "id") long id) {
        inventallService.put(inventall, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/inventall/{id}")
    public ResponseEntity<Void> delete(@PathVariable(value = "id") long id) {
        inventallService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
