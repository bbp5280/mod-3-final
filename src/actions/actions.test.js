import * as actions from './index';

describe('GOT Actions', () => {

  it(' storeGOTHouses hould take and array and return an action', () => {
    const houses = [
      {
        url:"https://www.anapioficeandfire.com/api/houses/81",
        name:"House Corbray of Heart's Home",
        region:"",
        coatOfArms:"Three black ravens in flight, holding three red hearts",
        words:"",
        titles:[
          "Lord of Heart's Home",
          "King of the Fingers (historical)"
        ],
        seats:[
          "Heart's Home"
        ],
        currentLord:"https://www.anapioficeandfire.com/api/characters/681",
        heir:"https://www.anapioficeandfire.com/api/characters/677",
        overlord:"https://www.anapioficeandfire.com/api/houses/7",
        founded:"",
        founder:"https://www.anapioficeandfire.com/api/characters/256",
        diedOut:"",
        ancestralWeapons:[
          "Lady Forlorn"
        ],
        cadetBranches:[

        ],
        swornMembers:[
          "https://www.anapioficeandfire.com/api/characters/255",
          "https://www.anapioficeandfire.com/api/characters/256",
          "https://www.anapioficeandfire.com/api/characters/447",
          "https://www.anapioficeandfire.com/api/characters/654",
          "https://www.anapioficeandfire.com/api/characters/677",
          "https://www.anapioficeandfire.com/api/characters/681",
          "https://www.anapioficeandfire.com/api/characters/871",
          "https://www.anapioficeandfire.com/api/characters/1182"
        ]
      }
    ];
    const expected = {
      type: 'STORE_HOUSES',
      gotHouses: [
        {
          url:"https://www.anapioficeandfire.com/api/houses/81",
          name:"House Corbray of Heart's Home",
          region:"",
          coatOfArms:"Three black ravens in flight, holding three red hearts",
          words:"",
          titles:[
            "Lord of Heart's Home",
            "King of the Fingers (historical)"
          ],
          seats:[
            "Heart's Home"
          ],
          currentLord:"https://www.anapioficeandfire.com/api/characters/681",
          heir:"https://www.anapioficeandfire.com/api/characters/677",
          overlord:"https://www.anapioficeandfire.com/api/houses/7",
          founded:"",
          founder:"https://www.anapioficeandfire.com/api/characters/256",
          diedOut:"",
          ancestralWeapons:[
            "Lady Forlorn"
          ],
          cadetBranches:[

          ],
          swornMembers:[
            "https://www.anapioficeandfire.com/api/characters/255",
            "https://www.anapioficeandfire.com/api/characters/256",
            "https://www.anapioficeandfire.com/api/characters/447",
            "https://www.anapioficeandfire.com/api/characters/654",
            "https://www.anapioficeandfire.com/api/characters/677",
            "https://www.anapioficeandfire.com/api/characters/681",
            "https://www.anapioficeandfire.com/api/characters/871",
            "https://www.anapioficeandfire.com/api/characters/1182"
          ]
        }
      ]
    };

    expect(actions.storeGOTHouses(houses)).toEqual(expected);
  });
});
