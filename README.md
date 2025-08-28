# DataJud Proxy

Proxy simples para acessar a API pública do CNJ (DataJud).

## Endpoints

- `/status` → Healthcheck  
- `/datajud?tribunal=TJSP` → Consulta por tribunal  
- `/datajud?classe=100` → Consulta por classe processual  
- `/datajud?assunto=Improbidade Administrativa` → Consulta por assunto  
