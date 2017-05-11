package my.garage.gates.service;

import my.garage.gates.experiments.ControlGpioExample;
import my.garage.gates.model.GateEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GateServiceGpio implements GateServices{
    @Autowired
    ControlGpioExample controlGpioExample;

    @Override
    public GateEntity open() {
        try {
            controlGpioExample.ledTest();
        } catch (InterruptedException e) {
            System.err.println("OOOPS");
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public GateEntity close() {
        return null;
    }
}
