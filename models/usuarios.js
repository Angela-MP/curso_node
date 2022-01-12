const usuariosQueries = {
    insertUsuario: `
        INSERT INTO
            usuarios(
                nombre,
                email,
                password,
                status
            )
        VAULES
              (?, ?, ?, ?)
    `,
    selectUsuarios: `
        SELECT
            *
        FROM
            usuarios
        WHERE
            status = 1
    `,
}