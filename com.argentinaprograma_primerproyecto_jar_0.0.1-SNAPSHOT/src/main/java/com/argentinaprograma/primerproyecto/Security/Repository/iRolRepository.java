
package com.argentinaprograma.primerproyecto.Security.Repository;

import com.argentinaprograma.primerproyecto.Security.Entity.Rol;
import com.argentinaprograma.primerproyecto.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);

}
