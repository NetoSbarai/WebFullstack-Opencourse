```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Usuário acessa a aplicação SPA

    browser->>server: GET /spa
    server-->>browser: HTML document

    browser->>server: GET spa.js
    server-->>browser: JavaScript da SPA

    Note right of browser: JavaScript começa a executar

    browser->>server: GET /data.json
    server-->>browser: JSON com as notas

    Note right of browser: JavaScript renderiza as notas na página
