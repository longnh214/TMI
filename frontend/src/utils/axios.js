import axios from "axios";

class BaseAxios {
  request = axios.create({
    baseURL: "https://k4a201.p.ssafy.io/api",
  });
  async basicGetRequest(url) {
    try {
      const response = await this.request.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export class TestJobAxios extends BaseAxios {
  getAll() {
    return this.basicGetRequest("/testjob");
  }
  getOneProject(pid) {
    return this.basicGetRequest(`/testjob/${pid}`);
  }
  getTestJob(pid, id) {
    return this.basicGetRequest(`/testjob/${pid}/${id}`);
  }
  getOneTest(pid, id, no) {
    return this.basicGetRequest(`/testjob/${pid}/${id}/${no}`);
  }
}

export class ProjectAxios extends BaseAxios {
  all() {
    return this.basicGetRequest("/project");
  }
  one(id) {
    return this.basicGetRequest(`/project/${id}`);
  }
}

export class JacocoAxios extends BaseAxios {
  all() {
    return this.basicGetRequest("/jacoco");
  }
  one(id) {
    return this.basicGetRequest(`/jacoco/${id}`);
  }
}
