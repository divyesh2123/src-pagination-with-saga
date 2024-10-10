import axios from "axios";

export async function getPaginationData(obj) {
  let p = await axios.get(
    `http://localhost:8080/api/tutorials?page=${obj.page}&size=${obj.pageSize}`
  );
  return p;
}
