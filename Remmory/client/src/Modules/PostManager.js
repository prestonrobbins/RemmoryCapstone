import { getToken } from "./authManager";

const _apiUrl = "/api/Post";


export const getAllPosts = () => {
    return getToken().then((token) => {
        return fetch(_apiUrl,
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

export const CreatePost = (post) => {
    return getToken().then((token) =>
      fetch(_apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      }));
  };

export const getPostById = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/postid/${id}`,
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

export const getPostsByParentChildId = (parentId) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/Parentchildid/${parentId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Failed: getPostsByParentChildId");
                }
            })
    })
}

export const getPostsByParentChildIdDate = (parentId, childId) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/Parentchildiddate/${parentId}/${childId}`,
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

const updatePost = (id) => {
    return getToken().then((token) =>
      fetch(`${_apiUrl}/{id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
      }).then(resp => resp.json()));
  };

export const deletePost = (id) => {
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









