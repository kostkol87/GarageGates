package my.garage.gates.service;

import my.garage.gates.model.GateEntity;
import org.springframework.stereotype.Service;

@Service
public class GateServiceGpio implements GateServices{

    @Override
    public GateEntity open() {
        return null;
    }

    @Override
    public GateEntity close() {
        return null;
    }
}
