package com.argentinaprograma.primerproyecto.Security.Service;

import com.argentinaprograma.primerproyecto.Security.Entity.Usuario;
import com.argentinaprograma.primerproyecto.Security.Repository.iUsuarioRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    iUsuarioRepository iusuarioRepository;

    public Optional<Usuario> getByNombreUsuario(String nombreUsuario) {
        return iusuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    public boolean existByNombreUsuario(String nombreUsuario) {
        return iusuarioRepository.existByNombreUsuario(nombreUsuario);
    }

    public boolean existByEmail(String email) {
        return iusuarioRepository.existByEmail(email);
    }

    public void save(Usuario usuario) {
        iusuarioRepository.save(usuario);
    }

}
