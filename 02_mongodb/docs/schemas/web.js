module.exports = {
    type: 'object',
    // Esquema para crear una web
    required: ["city","activity","title","summary","texts","images"],
    properties:{
        city:{
            type:"string",
            example:"Madrid"
        },
        activity:{
            type:"string",
            example:"Running"
        },
        title:{
            type:"string",
            example:"Running in Madrid"
        },
        summary:{
            type:"string",
            example:"Running in Madrid is a great experience"
        },
        texts:{
            type:"array",
            example:["Madrid is a great city"]
        },
        images:{
            type:"array",
            example:["madrid.jpg"]
        },
    },
    // Esquema para actualizar una web
    Updateweb:{
        type:"object",
        required: ["city","activity","title","summary"],
        properties:{
            city:{
                type:"string",
                example:"Madrid"
            },
            activity:{
                type:"string",
                example:"Running"
            },
            title:{
                type:"string",
                example:"Running in Madrid"
            },
            summary:{
                type:"string",
                example:"Running in Madrid is a great experience"
            },
        }
    },
    WebCreated:{
        type:"object",
        properties:{
            city:{
                type:"string",
                example:"Madrid"
            },
            activity:{
                type:"string",
                example:"Running"
            },
            title:{
                type:"string",
                example:"Running in Madrid"
            },
            summary:{
                type:"string",
                example:"Running in Madrid is a great experience"
            },
            texts:{
                type:"array",
                example:["Madrid is a great city"]
            },
            images:{
                type:"array",
                example:["madrid.jpg"]
            },
            reviews:{
                type:"object",
                properties:{
                    scoring:{
                        type:"number",
                        example: 3
                    },
                    points:{
                        type:"number",
                        example: 3
                    },
                    review:{
                        type:"string",
                        example: "Buena experiencia"
                    },
                }
            },
        }
    },
    WebUsers:{
        type:"object",
        properties:{
            message:{
                type:"string",
                example:"USERS_INTERESED"
            },
            emails:{
                type:"array",
                example:["emailexample@gmail.com"]
            }
        }
    },
    WebDelete:{
        type:"object",
        properties:{
            message:{
                type:"string",
                example:"WEB_DELETED_PHISICALY"
            }
        }
    },
    WebRestored:{
        type:"object",
        properties:{
            message:{
                type:"string",
                example:"WEB_RESTORED"
            },
            web:{
                type:"object",
                properties:{
                    city:{
                        type:"string",
                        example:"Madrid"
                    },
                    activity:{
                        type:"string",
                        example:"Running"
                    },
                    title:{
                        type:"string",
                        example:"Running in Madrid"
                    },
                    summary:{
                        type:"string",
                        example:"Running in Madrid is a great experience"
                    },
                    texts:{
                        type:"array",
                        example:["Madrid is a great city"]
                    },
                    images:{
                        type:"array",
                        example:["madrid.jpg"]
                    },
                    reviews:{
                        type:"object",
                        properties:{
                            scoring:{
                                type:"number",
                                example: 3
                            },
                            points:{
                                type:"number",
                                example: 3
                            },
                            review:{
                                type:"string",
                                example: "Buena experiencia"
                            },
                        }
                    },
                }
            }
        }
    },
}