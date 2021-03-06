// use researchlab-db

db.createCollection('projects', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['projectName', 'budget', 'startDate', 'endDate', 'leaderId', 'leaderName', 'status'],
            properties: {
                projectName: {
                    bsonType: 'string',
                    description: 'Nombre del proyecto, campo obligatorio.'
                },
                budget: {
                    bsonType: 'double',
                    description: 'Presupuesto del proyecto, campo obligatorio.'
                },
                startDate: {
                    bsonType: 'string',
                    description: 'Fecha Inicial, campo obligatorio.'
                },
                endDate: {
                    bsonType: 'string',
                    description: 'Fecha Final, campo obligatorio.'
                },
                leaderId: {
                    bsonType: 'string',
                    description: 'Identificación del Líder, campo obligatorio.'
                },
                leaderName: {
                    bsonType: 'string',
                    description: 'Nombre del Líder, campo obligatorio.'
                },
                status: {
                    bsonType: 'string',
                    enum: ["Activo", "Inactivo"],
                    description: 'Estado del proyecto, campo obligatorio.'
                },
                phase: {
                    bsonType: 'string',
                    enum: ["Iniciado", "En desarrollo", "Finalizado"],
                    description: 'Fase del proyecto, campo obligatorio'
                },
                generalObj: {
                    bsonType: 'array',
                    uniqueItems: true,
                    description: 'Los objetivos generales, cuentan como arreglo de datos.',
                    items: {
                        bsonType: ['object'],
                        required: ['user', 'objective'],
                        properties: {
                            id: {
                                bsonType: 'objectId'
                            },
                            user: {
                                bsonType: 'string',
                                description: 'El ID del usuario que ingresó el objetivo, campo obligatorio.'
                            },
                            objective: {
                                bsonType: 'string',
                                description: 'El objetivo en si, campo obligatorio'
                            }
                        }
                    }
                },
                specificObj: {
                    bsonType: 'array',
                    uniqueItems: true,
                    description: 'Los objetivos especificos, cuentan como arreglo de datos.',
                    items: {
                        bsonType: ['object'],
                        required: ['user', 'objective'],
                        properties: {
                            id: {
                                bsonType: 'objectId'
                            },
                            user: {
                                bsonType: 'string',
                                description: 'El ID del usuario que ingresó el objetivo, campo obligatorio.'
                            },
                            objective: {
                                bsonType: 'string',
                                description: 'El objetivo en si, campo obligatorio'
                            }
                        }
                    }
                },
                inscriptions: {
                    bsonType: 'array',
                    uniqueItems: true,
                    description: 'Las inscripciones de los usuarios al proyecto, cuentan como arreglo de datos.',
                    items: {
                        bsonType: ['object'],
                        required: ['studentId', 'joinDate', 'leftDate', 'status'],
                        properties: {
                            id: {
                                bsonType: 'objectId'
                            },
                            studentId: {
                                bsonType: 'string',
                                description: 'El ID del estudiante que hizo la inscripción, campo obligatorio.'
                            },
                            joinDate: {
                                bsonType: 'string',
                                description: 'Fecha Inicial, campo obligatorio.'
                            },
                            leftDate: {
                                bsonType: 'string',
                                description: 'Fecha Final, campo obligatorio.'
                            },
                            status: {
                                enum: ["Pendiente", "Aceptado", "Rechazado"],
                                description: 'Estado de la inscripción, campo obligatorio.'
                            }

                        }
                    }
                },
                progress: {
                    bsonType: 'array',
                    uniqueItems: true,
                    description: 'Los avancces dictados por los usuarios de los usuarios al proyecto, cuentan como arreglo de datos.',
                    items: {
                        bsonType: ['object'],
                        required: ['date', 'description', 'createdBy'],
                        properties: {
                            id: {
                                bsonType: 'objectId'
                            },
                            date: {
                                bsonType: 'string',
                                description: 'Fecha del registro, campo obligatorio.'
                            },
                            description: {
                                bsonType: 'string',
                                description: 'Descripción del avance, campo obligatorio.'
                            },
                            observation: {
                                bsonType: 'string',
                                description: 'Observación del lider, campo obligatorio.'
                            },
                            createdBy: {
                                bsonType: 'string',
                                description: 'Id del Usuario que creó el avance, campo obligatorio.'
                            }
                        }
                    }
                }
            }
        }
    }
})

db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['email', 'DNI', 'name', 'lastName', 'password', 'role', 'status'],
            properties: {
                email: {
                    bsonType: 'string',
                    description: 'Email del usuario, campo obligatorio.'
                },
                DNI: {
                    bsonType: 'string',
                    description: 'DNI del usuario, campo obligatorio.'
                },
                name: {
                    bsonType: 'string',
                    description: 'Nombre del usuario, campo obligatorio.'
                },
                lastName: {
                    bsonType: 'string',
                    description: 'Apellido del usuario, campo obligatorio.'
                },
                password: {
                    bsonType: 'string',
                    description: 'Password del usuario, campo obligatorio.'
                },
                status: {
                    enum: ["Pendiente", "Autorizado", "No Autorizado"],
                    description: 'Estatus del usuario, campo obligatorio.'
                },
                role: {
                    enum: ["Estudiante", "Lider", "Admin"],
                    description: 'Rol del usuario, campo obligatorio.'
                },
            }
        }
    }
})