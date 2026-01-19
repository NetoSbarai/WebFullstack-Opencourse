```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuário escreve uma nota e clica em Submit

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: Servidor salva a nova nota
    server-->>browser: HTTP 302 Redirect para /notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET main.css
    browser->>server: GET main.js

    browser->>server: GET data.json
    activate server
    server-->>browser: JSON com notas atualizadas
    deactivate server

    Note right of browser: Navegador renderiza a página com a nova nota
