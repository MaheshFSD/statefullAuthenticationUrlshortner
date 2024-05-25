const sessionIdMap = new Map();

const setSessionId = (id, user) => {
    sessionIdMap.set(id, user);
};

const getSessionIdUser = (id) => {
    return sessionIdMap.get(id);
};

module.exports = {setSessionId, getSessionIdUser};