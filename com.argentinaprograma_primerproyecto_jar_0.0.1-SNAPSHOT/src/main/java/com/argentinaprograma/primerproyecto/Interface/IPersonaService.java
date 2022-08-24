
package com.argentinaprograma.primerproyecto.Interface;

import com.argentinaprograma.primerproyecto.Entity.Persona;
import java.util.List;


public interface IPersonaService {
//Traer una lista de persona
    public List<Persona> getPersona();
//Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
//Eliminar un usuario, pero lo buscamos x ID
    public void deletePersona (Long id);
//Buscar una persona x id
    public Persona findPersona(Long id);
}
