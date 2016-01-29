class Bowling

    rolls = null
    currentRoll = null
    
    constructor: ->
        rolls = []
        currentRoll = 0
        for i in [0..20]
            rolls[i]=0

    score: ->
        rollIndex=0
        score=0
        for frame in [0..9]
            if isStrike(rollIndex)
                score+= 10 + rolls[rollIndex+1] + rolls[rollIndex+2]
                rollIndex++
            else if isSpare(rollIndex)
                score += 10+rolls[rollIndex+2]
                rollIndex+=2
            else
                score+=rolls[rollIndex]+rolls[rollIndex+1]
                rollIndex+=2
        score

    roll: (pines) ->
        if pines>10
            throw Error('a roll cannot exceed 10')
        rolls[currentRoll++] = pines

    isSpare = (rollIndex) ->
        rolls[rollIndex]+rolls[rollIndex+1] is 10

    isStrike = (rollIndex) ->
        rolls[rollIndex] is 10

exports.Bowling = Bowling