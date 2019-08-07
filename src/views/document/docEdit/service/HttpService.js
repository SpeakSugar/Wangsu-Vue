import http from '../../../../utils/http/request';

export default {

    queryTreeByLevel(params, success) {
        http.get("/backoffice/document/queryTreeByLevel", params, success);
    },

    insertMenu(data, success) {
        http.post("/backoffice/menu/insert", {}, data, success);
    },

    updateMenu(data, success) {
        http.put("/backoffice/menu/update", {}, data, success);
    },

    fakeDelete(params, success) {
        http.delete("/backoffice/menu/fake/delete", params, success);
    },

}