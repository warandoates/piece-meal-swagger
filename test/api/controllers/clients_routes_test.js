/*jshint esversion: 6 */
// 'use strict';

process.env.NODE_ENV = 'test';

const {suite, test} = require('mocha');
const request = require('supertest');
const bcrypt = require('bcrypt');
const knex = require('../../../knex');
const server = require('../../../app');
const assert = require('chai').assert;
const authToken = process.env.AUTH_TOKEN;

const notes = `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.`;

const description = `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.`;

const baconDescription = "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.";

const description_1 = "Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.";

const description_2 = "Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jÃ­cama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.";

const description_3 = "Great when making breakfast for the family!  Can be eaten cold too!";

const description_4 = "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard] greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.";

const description_5 = "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.";

const description_6 = "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.";

const description_7 = "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.";

const description_8 = "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.";

suite('clients tests', () => {
    before((done) => {
        knex.migrate.latest().then(() => {
            done();
        }).catch((err) => {
            done(err);
        });
    });

    beforeEach((done) => {
        knex.seed.run().then(() => {
            done();
        }).catch((err) => {
            done(err);
        });
    });

    test('GET /clients', (done) => {
        /* eslint-disable max-len */
        request(server).get('/api/v1/clients').set('Accept', 'application/json').set('token', authToken).expect('Content-Type', /json/).expect(200, {
            "clients": [
                {
                    "id": 1,
                    "first_name": 'Marvin',
                    "last_name": 'Gaye',
                    "email": 'marvin.gaye@gmail.com',
                    "is_super_user": false,
                    "recipes": [
                        {
                            id: 1,
                            name: "cauliflower buffalo bites",
                            "description": description_1,
                            image_url: '',
                            instructions: [
                                {
                                    step_number: 1,
                                    instructions: 'do step one'
                                }, {
                                    step_number: 2,
                                    instructions: 'do step two'
                                }, {
                                    step_number: 3,
                                    instructions: 'do step three'
                                }, {
                                    step_number: 4,
                                    instructions: 'do step four'
                                }, {
                                    step_number: 5,
                                    instructions: 'do step five'
                                }
                            ],
                            "notes": notes,
                            "active": true
                        }, {
                            id: 2,
                            name: "simple oatmeal",
                            "description": description_2,
                            instructions: [],
                            image_url: '',
                            "notes": "There is a no-cook version of this known as 'Overnight Oats'.  Check it out!",
                            "active": true
                        }, {
                            id: 3,
                            name: "cheese omelette",
                            "description": 'Great when making breakfast for the family!  Can be eaten cold too!',
                            image_url: '',
                            "instructions": [
                                {
                                    "instructions": "Crack the eggs into a mixing bowl, season with a pinch of sea salt and black pepper, then beat well with a fork until fully combined.",
                                    "step_number": 1
                                }, {
                                    "instructions": "Place a small non-stick frying pan on a low heat to warm up.",
                                    "step_number": 2
                                }
                            ],
                            "notes": notes,
                            "active": true
                        }
                    ]
                }, {
                    "id": 2,
                    "first_name": 'Al',
                    "last_name": 'Green',
                    "email": 'al.green@gmail.com',
                    "is_super_user": false,
                    "recipes": []
                }, {
                    "id": 3,
                    "first_name": 'Randall',
                    "last_name": 'Spencer',
                    "email": 'randy.spence@gmail.com',
                    "is_super_user": true,
                    "recipes": [
                        {
                            "id": 2,
                            image_url: '',
                            "instructions": [],
                            "name": "simple oatmeal",
                            "description": description_2,
                            "notes": "There is a no-cook version of this known as 'Overnight Oats'.  Check it out!",
                            "active": true
                        }, {
                            "id": 4,
                            image_url: '',
                            "instructions": [],
                            "name": "Recipe #4",
                            "description": description_4,
                            "notes": notes,
                            "active": true
                        }, {
                            "id": 5,
                            image_url: '',
                            "instructions": [],
                            "name": "Recipe #5",
                            "description": description_5,
                            "notes": notes,
                            "active": true
                        }, {
                            "id": 8,
                            image_url: '',
                            "instructions": [],
                            "name": "Recipe #8",
                            "description": description_8,
                            "notes": notes,
                            "active": true
                        }
                    ]
                }, {
                    "id": 4,
                    "first_name": 'Aom',
                    "last_name": 'Sithanant',
                    "email": 'aom.sithanant@gmail.com',
                    "is_super_user": true,
                    "recipes": [
                        {
                            "id": 5,
                            image_url: '',
                            "instructions": [],
                            "name": "Recipe #5",
                            "description": description_5,
                            "notes": notes,
                            "active": true
                        }, {
                            "id": 6,
                            image_url: '',
                            "instructions": [],
                            "name": "Recipe #6",
                            "description": description_6,
                            "notes": notes,
                            "active": true
                        }, {
                            "id": 7,
                            image_url: '',
                            "instructions": [],
                            "name": "Recipe #7",
                            "description": description_7,
                            "notes": notes,
                            "active": true
                        }
                    ]
                }
            ]
        }, done);
    });

    test('GET /clients/:id/ingredients/:ingredient_id/verify (safe case)', (done) => {
        request(server).get('/api/v1/clients/1/ingredients/1/verify').set('Accept', 'application/json').set('token', authToken).expect('Content-Type', /json/).expect(200, {
            safe: true
        }, done);
    });

    test('GET /clients/:id/ingredients/:ingredient_id/verify (non-safe case)', (done) => {
        request(server).get('/api/v1/clients/2/ingredients/1/verify').set('Accept', 'application/json').set('token', authToken).expect('Content-Type', /json/).expect(200, {
            "safe": false,
            "alternatives": [
                {
                    "id": 2,
                    "name": "egg"
                }, {
                    "id": 3,
                    "name": "milk"
                }
            ]
        }, done);
    });

    test('GET /clients/:user_id/recipes/:recipe_id/crosscheck', (done) => {
        request(server).get('/api/v1/clients/2/recipes/1/crosscheck').set('Accept', 'application/json').expect('Content-Type', /json/).set('token', authToken).expect(200, {
            "is_safe": false,
            "forbidden": [
                {
                    "ingredient_id": 1,
                    "name": "bacon",
                    "description": "Mmmmmmmmm...Bacon!"
                }, {
                    "ingredient_id": 3,
                    "name": "milk",
                    "description": description
                }
            ]
        }, done);
    })

    test('GET /clients/:id', (done) => {
        /* eslint-disable max-len */
        request(server).get('/api/v1/clients/1').set('Accept', 'application/json').set('token', authToken).expect('Content-Type', /json/).expect(200, {
            "id": 1,
            "first_name": 'Marvin',
            "last_name": 'Gaye',
            "email": 'marvin.gaye@gmail.com',
            "is_super_user": false,
            "recipes": [
                {
                    id: 1,
                    name: "cauliflower buffalo bites",
                    image_url: '',
                    instructions: [],
                    description: description_1,
                    notes: notes
                }, {
                    id: 2,
                    name: "simple oatmeal",
                    image_url: '',
                    instructions: [],
                    description: description_2,
                    notes: notes
                }, {
                    id: 3,
                    name: "cheese omelette",
                    image_url: '',
                    instructions: [],
                    description: description_3,
                    notes: notes
                }
            ]
        });

        request(server).get('/api/v1/clients/4').set('Accept', 'application/json').set('token', authToken).expect('Content-Type', /json/).expect(200, {
            "id": 4,
            "first_name": 'Aom',
            "last_name": 'Sithanant',
            "email": 'aom.sithanant@gmail.com',
            "is_super_user": true,
            "recipes": [
                {
                    "id": 5,
                    "instructions": [],
                    "name": "Recipe #5",
                    "description": description_5,
                    "image_url": "",
                    "notes": notes
                }, {
                    "id": 6,
                    "instructions": [],
                    "name": "Recipe #6",
                    "description": description_6,
                    "image_url": "",
                    "notes": notes
                }, {
                    "id": 7,
                    "instructions": [],
                    "name": "Recipe #7",
                    "description": description_7,
                    "image_url": "",
                    "notes": notes
                }
            ],
            "restrictions": [
                {
                  "description": description,
                  "id": 25,
                  "name": "carrot"
                },
                {
                  "description": description,
                  "id": 26,
                  "name": "celery"
                },
                {
                  "description": description,
                  "id": 2,
                  "name": "egg"
                },
                {
                  "description": description,
                  "id": 20,
                  "name": "grains of paradise"
                },
                {
                  "description": description,
                  "id": 17,
                  "name": "lemon juice (fresh)"
                },
                {
                  "description": description,
                  "id": 22,
                  "name": "onion"
                },
                {
                  "description": description,
                  "id": 24,
                  "name": "white flour"
                }
              ],
              "favorites": {
                "recipes": [ 7, 6 ]
              }
        }, done);

        /* eslint-enable max-len */
    });

    test('GET /search/clients/?email=aom', (done) => {
        request(server).get('/api/v1/search/clients/?last_name=ant').set('Accept', 'application/json').set('token', authToken).expect('Content-Type', /json/).expect(200, {
            clients: [
                {
                    "id": 4,
                    "first_name": 'Aom',
                    "last_name": 'Sithanant',
                    "email": 'aom.sithanant@gmail.com',
                    "is_super_user": true,
                    "recipes": [
                        {
                            "id": 5,
                            "instructions": [], // "It's Friday night.",
                            "name": "Recipe #5",
                            "description": description_5,
                            "notes": notes
                        }, {
                            "id": 6,
                            "instructions": [], // "And I'm feelin' right.",
                            "name": "Recipe #6",
                            "description": description_6,
                            "notes": notes
                        }, {
                            "id": 7,
                            "instructions": [], // "The party's over on the west side.",
                            "name": "Recipe #7",
                            "description": description_7,
                            "notes": notes
                        }
                    ]
                }
            ]
        }, done);
    });

    // test('GET /clients/88', (done) => {
    //     request(server)
    //         .get('/clients/88')
    //         .set('Accept', 'text/plain')
    //         .expect('Content-Type', 'application/json')
    //         .expect(404, 'Not Found', done);
    //
    //     /* eslint-enable max-len */
    // });

    test('POST /clients', (done) => {
        const password = 'ilikebigcats';

        request(server).post('/api/v1/clients').set('Accept', 'application/json').set('Content-Type', 'application/json').set('token', authToken).send({first_name: 'John', last_name: 'Siracusa', email: 'john.siracusa@gmail.com', password}).expect((res) => {
            delete res.body.created_at;
            delete res.body.updated_at;
            delete res.body.token;
        }).expect(200, {
            id: 5,
            first_name: 'John',
            last_name: 'Siracusa',
            email: 'john.siracusa@gmail.com',
            is_super_user: false
        }).expect('Content-Type', /json/).end((httpErr, _res) => {
            if (httpErr) {
                return done(httpErr);
            }

            knex('clients').where('id', 5).first().then((client) => {
                const hashedPassword = client.hashed_password;

                delete client.hashed_password;
                delete client.created_at;
                delete client.updated_at;

                assert.deepEqual(client, {
                    id: 5,
                    first_name: 'John',
                    last_name: 'Siracusa',
                    email: 'john.siracusa@gmail.com',
                    is_super_user: false
                });

                // eslint-disable-next-line no-sync
                const isMatch = bcrypt.compareSync(password, hashedPassword);

                assert.isTrue(isMatch, "passwords don't match");
                done();
            }).catch((dbErr) => {
                done(dbErr);
            });
        });
    });

    test('POST /clients/:id/restrictions', (done) => {
        request(server).post('/api/v1/clients/2/restrictions').set('Accept', 'application/json').set('token', authToken).send({ingredient_id: 4}).expect('Content-Type', /json/).expect(200, {
            success: 1,
            description: 'Restriction has been added'
        }, done)
    });

    test('GET /clients/:id/restrictions', (done) => {
        request(server).get('/api/v1/clients/2/restrictions').set('Accept', 'application/json').set('token', authToken).expect(200, {
            ingredients: [
                {
                    id: 1,
                    name: 'bacon',
                    description: "Mmmmmmmmm...Bacon!",
                    tags: ['meat', 'pork']
                }, {
                    id: 2,
                    name: 'egg',
                    description: description,
                    tags: ['vegetarian']
                }, {
                    id: 3,
                    name: 'milk',
                    description: description,
                    tags: ['dairy', 'vegetarian']
                }
            ]
        }, done);
    });

    test('DELETE /clients/:id/restrictions', (done) => {
        request(server).del('/api/v1/clients/2/restrictions').set('Accept', 'application/json').set('token', authToken).send({ingredient_id: 2}).expect('Content-Type', /json/).expect(200, {
            success: 1,
            description: 'Restriction has been deleted'
        }, done);
    });

    test('DELETE /clients/:id/restrictions', (done) => {
        request(server).del('/api/v1/clients/2/restrictions').set('Accept', 'application/json')
        // .set('token', authToken)
            .send({ingredient_id: 2}).expect('Content-Type', /json/).expect(401, JSON.stringify('Not Logged In'), done)
    });
});
