package my.garage.gates.controllers;

import my.garage.gates.model.GateEntity;
import my.garage.gates.service.GateServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class GatesController {

    @Autowired
    GateServices gateServices ;

    @GetMapping(value = "/open")
    public GateEntity open(){
        System.out.println("OPEN");
        return gateServices.open();
    }

    @GetMapping(value = "/close")
    public GateEntity close(){
        System.out.println("CLOSE");
        return gateServices.close();
    }
}
