Course: Full Stack Open  

Part: 0

Exercise: 0.6 - New Note in Single Page App Diagram

```mermaid 

sequenceDiagram
  activate Server
  Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Server-->>Browser: HTTP Status Code 201 created
  deactivate Server
  
```
