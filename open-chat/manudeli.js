const getParsedRecordString = (string) => {
  const splittedString = string.split(' ')
  return {
    action: splittedString[0],
    uid: splittedString[1],
    nickname: splittedString[2],
  }
}

const proceedRecord = (store, nicknameMap, { action, uid, nickname }) => {
  switch (action) {
    case 'Enter':
      nicknameMap[uid] = nickname
      store.push({ uid, action })
      break
    case 'Leave':
      store.push({ uid, action })
      break
    case 'Change':
      nicknameMap[uid] = nickname
      break
    default:
      console.log('No Action to do')
  }
}

const getActionString = (action) => {
  if (action === 'Enter') {
    return '들어왔습니다.'
  } else {
    return '나갔습니다.'
  }
}

function solution(record) {
  const result = []
  const nicknameMap = {}

  const parsedRecord = record.map((string) => {
    const parsedRecord = getParsedRecordString(string)
    proceedRecord(result, nicknameMap, parsedRecord)
  })

  return result.map(
    ({ uid, action }) => `${nicknameMap[uid]}님이 ${getActionString(action)}`
  )
}
