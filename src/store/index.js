import { createStore, storeKey } from 'vuex'

export default createStore({
  state: {
    gameElements: [
      {name: "apple", id: 1, isVisible: false, isCompleted: false, picture: "/assets/apple.png"},
      {name: "apple", id: 2, isVisible: false, isCompleted: false, picture: "/assets/apple.png"},
      {name: "apricot", id: 3, isVisible: false, isCompleted: false, picture: "/assets/apricot.png"},
      {name: "apricot", id: 4, isVisible: false, isCompleted: false, picture: "/assets/apricot.png"},
      {name: "avocado", id: 5, isVisible: false, isCompleted: false, picture: "/assets/avocado.png"},
      {name: "avocado", id: 6, isVisible: false, isCompleted: false, picture: "/assets/avocado.png"},
      {name: "banana", id: 7, isVisible: false, isCompleted: false, picture: "/assets/banana.png"},
      {name: "banana", id: 8, isVisible: false, isCompleted: false, picture: "/assets/banana.png"},
      {name: "blackberry", id: 9, isVisible: false, isCompleted: false, picture: "/assets/blackberry.png"},
      {name: "blackberry", id: 10, isVisible: false, isCompleted: false, picture: "/assets/blackberry.png"},
      {name: "grapes", id: 11, isVisible: false, isCompleted: false, picture: "/assets/grapes.png"},
      {name: "grapes", id: 12, isVisible: false, isCompleted: false, picture: "/assets/grapes.png"},
      {name: "kiwi", id: 13, isVisible: false, isCompleted: false, picture: "/assets/kiwi.png"},
      {name: "kiwi", id: 14, isVisible: false, isCompleted: false, picture: "/assets/kiwi.png"},
      {name: "lemon", id: 15, isVisible: false, isCompleted: false, picture: "/assets/lemon.png"},
      {name: "lemon", id: 16, isVisible: false, isCompleted: false, picture: "/assets/lemon.png"},
      {name: "melon", id: 17, isVisible: false, isCompleted: false, picture: "/assets/melon.png"},
      {name: "melon", id: 18, isVisible: false, isCompleted: false, picture: "/assets/melon.png"},
      {name: "orange", id: 19, isVisible: false, isCompleted: false, picture: "/assets/orange.png"},
      {name: "orange", id: 20, isVisible: false, isCompleted: false, picture: "/assets/orange.png"},
      {name: "peach", id: 21, isVisible: false, isCompleted: false, picture: "/assets/peach.png"},
      {name: "peach", id: 22, isVisible: false, isCompleted: false, picture: "/assets/peach.png"},
      {name: "peanut", id: 23, isVisible: false, isCompleted: false, picture: "/assets/peanut.png"},
      {name: "peanut", id: 24, isVisible: false, isCompleted: false, picture: "/assets/peanut.png"},
      {name: "pear", id: 25, isVisible: false, isCompleted: false, picture: "/assets/pear.png"},
      {name: "pear", id: 26, isVisible: false, isCompleted: false, picture: "/assets/pear.png"},
      {name: "plum", id: 27, isVisible: false, isCompleted: false, picture: "/assets/plum.png"},
      {name: "plum", id: 28, isVisible: false, isCompleted: false, picture: "/assets/plum.png"},
      {name: "raspberry", id: 29, isVisible: false, isCompleted: false, picture: "/assets/raspberry.png"},
      {name: "raspberry", id: 30, isVisible: false, isCompleted: false, picture: "/assets/raspberry.png"},
      {name: "strawberry", id: 31, isVisible: false, isCompleted: false, picture: "/assets/strawberry.png"},
      {name: "strawberry", id: 32, isVisible: false, isCompleted: false, picture: "/assets/strawberry.png"},
      {name: "walnut", id: 33, isVisible: false, isCompleted: false, picture: "/assets/walnut.png"},
      {name: "walnut", id: 34, isVisible: false, isCompleted: false, picture: "/assets/walnut.png"},
      {name: "watermelon", id: 35, isVisible: false, isCompleted: false, picture: "/assets/watermelon.png"},
      {name: "watermelon", id: 36, isVisible: false, isCompleted: false, picture: "/assets/watermelon.png"}
    ],
    gameInProgress: false,
    timeCount: null,
    moveCount: 0,
    firstPick: {},
    secondPick: {},
    completedFields: 0,
    deciseconds: 0,
    seconds: 0,
    minutes: 0,
    result: 0,
    topTenScore: false,
    username: '',
    highScores: []
  },
  mutations: {
    shuffle(state) {
      for (let i = state.gameElements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.gameElements[i], state.gameElements[j]] = [state.gameElements[j], state.gameElements[i]];
      }
      return state.gameElements;
    },
    resetBoard(state) {
      state.gameElements.forEach(element => {
        element.isVisible = false
        element.isCompleted = false
      })
      state.completedFields = 0
      state.deciseconds = 0
      state.seconds = 0
      state.minutes = 0
      state.result = 0
      state.gameInProgress = true
      state.timeCount = null
    },
    checkField(state, payload) {
      if (state.gameInProgress && !payload.isCompleted) {
        state.moveCount = state.moveCount + 1
        payload.isVisible = true
        if (state.moveCount == 1) {
          state.firstPick = payload
        }
        else {
          state.secondPick = payload
          setTimeout(function() {
            if (state.firstPick.name == state.secondPick.name) {
              state.gameElements.forEach(element => {
                if (element.name == state.firstPick.name || element.name == state.secondPick.name) {
                  element.isVisible = false
                  element.isCompleted = true
                }   
              })
              state.completedFields = state.completedFields + 2
            }
            else {
              state.gameElements.forEach(element => {
                if (element.name == state.firstPick.name || element.name == state.secondPick.name) {
                  element.isVisible = false
                }
              })
              state.firstPick = {}
              state.secondPick = {}
            } 
          }, 700)
          state.moveCount = 0
        }
      }
    },
    stopWatch(state) {
      state.timeCount = setInterval(function () {
        state.result ++;
        state.deciseconds ++;
        if (state.deciseconds / 10 == 1) {
          state.deciseconds = 0;
          state.seconds ++;
          if (state.seconds / 60 == 1) {
            state.seconds = 0;
            state.minutes ++;
          }
        }
      }, 100);
    },
    addHighScore(state) {
      state.highScores.push({
        name: state.username,
        id: Date.now(),
        score: state.result,
        time: state.minutes + " : " + state.seconds + "." + state.deciseconds
      })
    },
    removeScore(state){
      if (state.highScores.length > 10) {
        state.highScores.sort((a, b) => {return a.score - b.score})
        state.highScores.pop()
      }  
    },
    checkHighScore(state) {
      if (state.highScores.length < 10) {
        state.topTenScore = true
      }
      else {
        for (const element of state.highScores) {
          if (state.result < element.score) {
            state.topTenScore = true
            break
          }
        }
      }
    },
    updateUsername(state, payload) {
      state.username = payload
    },
    sendData(state) {
      fetch('https://memorygame-743f3-default-rtdb.firebaseio.com/highScores.json', {
        method: 'POST',
        headers: {
          'Content-Type' : 'aplication.json'
        },
        body: JSON.stringify({
          highScores: state.highScores
        })
      })
    },
    getData(state) {
      fetch('https://memorygame-743f3-default-rtdb.firebaseio.com/highScores.json')
        .then(function(response) {
          if (response.ok) {
            return response.json()
          }
        }) 
        .then(function(data) {
          const received = []
          for (const id in data) {
            received.push({
              id: id,
              highScores: data(id).highScores
            })
          }
          state.highScores = received
        }) 
    }
  },
  actions: {
    shuffle(context) {
      context.commit('shuffle')
    },
    resetBoard(context) {
      context.commit('resetBoard')
    },   
    checkField(context, payload) {
      context.commit('checkField', payload)
    },
    stopWatch(context) {
      context.commit('stopWatch')
    },
    addHighScore(context) {
      context.commit('addHighScore')
    },
    removeScore(context){
      context.commit('removeScore')
    },
    checkHighScore(context) {
      context.commit('checkHighScore')
    },
    updateUsername(context, payload) {
      context.commit('updateUsername', payload)
    },
    sendData(context) {
      context.commit('sendData')
    },
    getData(context) {
      context.commit('getData')
    }
  },
  getters: {
    sortHighScores(state) {
      return state.highScores.sort((a, b) => {return a.score - b.score})
    },
    parseMinutes(state) {
      return state.minutes < 10 ? state.minutes = `0${state.minutes}` : state.minutes = `${state.minutes}` 
    },
    parseSeconds(state) {
      return state.seconds < 10 ? state.seconds = `0${state.seconds}` : state.seconds = `${state.seconds}`
    },
    parseDeciseconds(state) {
      return state.deciseconds = `${state.deciseconds}`
    }
  }
})
