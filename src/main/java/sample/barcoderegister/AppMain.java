/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sample.barcoderegister;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author masayasu.matsuoka
 */
@RestController
@EnableAutoConfiguration
public class AppMain {

    @RequestMapping("/")
    public String home(){
        return "こんにちは！Hello, World !";
    }
    
        
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
         SpringApplication.run(AppMain.class, args);
    }
    
}
