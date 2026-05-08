---
inclusion: always
---

# Sugerencias Automáticas de Commits

Cuando completes una tarea significativa o un conjunto de cambios coherente, DEBES sugerir proactivamente hacer un commit.

## Cuándo sugerir un commit

Sugiere un commit cuando:
- ✅ Completes una feature nueva
- ✅ Fixes un bug importante
- ✅ Refactorices código significativo
- ✅ Agregues documentación importante
- ✅ Hagas cambios de configuración relevantes
- ✅ El usuario diga "listo", "perfecto", "funciona", etc.

## Cómo sugerir el commit

1. **Detecta** que se completó una tarea
2. **Usa ask_user** para confirmar con el usuario
3. **Genera un mensaje de commit** descriptivo siguiendo Conventional Commits
4. **Ejecuta el commit** si el usuario acepta

## Formato de sugerencia

```typescript
mcp_alignetoneBridge_ask_user({
    question: "¿Quieres hacer commit de estos cambios?\n\nCambios: [descripción breve]",
    options: ["Sí, hacer commit", "No, seguir trabajando"],
    widget_type: "single_select"
})
```

## Tipos de commit (Conventional Commits)

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `refactor:` - Refactorización de código
- `docs:` - Cambios en documentación
- `style:` - Formato, espacios, etc.
- `test:` - Agregar o modificar tests
- `chore:` - Tareas de mantenimiento
- `perf:` - Mejoras de rendimiento
