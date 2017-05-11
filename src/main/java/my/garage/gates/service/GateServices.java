package my.garage.gates.service;

import my.garage.gates.model.GateEntity;

/**
 * Created by Cabinet on 11.05.2017.
 */
public interface GateServices {

    GateEntity open();

    GateEntity close();
}
