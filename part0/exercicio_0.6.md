```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuário escreve uma nota e clica em Submit

    Note right of browser: JavaScript intercepta o envio do formulário

    browser->>server: POST /new_note_spa (JSON da nova nota)
    activate server
    Note left of server: Servidor salva a nova nota
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: JavaScript atualiza a lista de notas sem recarregar a página
