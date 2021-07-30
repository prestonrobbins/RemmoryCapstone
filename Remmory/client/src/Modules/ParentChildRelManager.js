import { getToken } from "./authManager";

const _apiUrl = "/api/ParentChildRelationship";


export const getPCRById = (id) => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/${id}`,
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

const CreatePCR = (PCR) => {
    return getToken().then((token) =>
      fetch(_apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(PCR)
      }).then(resp => resp.json()));
  };

export const getAllPCRs = () => {
    return getToken().then((token) => {
        return fetch(`${_apiUrl}/AllRels`,
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

const updatePCR = (id) => {
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

export const deletePCR = (id) => {
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
