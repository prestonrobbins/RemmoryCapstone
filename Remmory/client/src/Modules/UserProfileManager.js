import { getToken } from "./authManager";

const _apiUrl = "/api/UserProfile";

export const getAllUsers = () => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/GetAllUsers`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed");
                }
            })
    })
}

export const getChildrenByParentId = () => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/Children`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed");
                }
            })
    })
}

export const getParentsByChildId = () => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/Parents`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed");
                }
            })
    })
}

export const getUser = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/GetUser/${id}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed");
                }
            })
    })
}

export const getUserByFirebaseId = (firebaseUserId) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${firebaseUserId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed");
                }
            })
    })
}

export const doesUserExistByFirebaseId = (firebaseUserId) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}DoesUserExist/${firebaseUserId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed");
                }
            })
    })
}

const CreateUser = (user) => {
    return getToken().then((token) =>
      fetch(_apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }).then(resp => resp.json()));
  };

  const updateUser = (user) => {
    return getToken().then((token) =>
      fetch(_apiUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }).then(resp => resp.json()));
  };

export const deleteUserProfileById = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
    })
}

export const SearchForUsersByName = (string) => {
    return getToken().then((token) => {
        return fetch(_apiUrl + '/SearchForUsersByName?q=' + string, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to search users.");
            }
        });
    });
}









