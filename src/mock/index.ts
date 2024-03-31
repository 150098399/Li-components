import Mock from "mockjs";
const Random = Mock.Random;

interface DataList {
  date: string;
  name: string;
  address: string;
}

const dataList: DataList[] = [];
for (let i = 0; i < 99; i++) {
  const template = {
    date: Random.date(),
    name: Random.name(),
    address: Random.province(),
  };
  dataList.push(template);
}

Mock.mock("/api/list", "post", (params: any) => {
  let info = JSON.parse(params.body);
  let [index, size, total] = [info.current, info.pageSize, dataList.length];
  let len = total / size;
  let totalPages =
    len - parseInt(String(len)) > 0 ? parseInt(String(len)) + 1 : len;
  let newDatalist = dataList.slice((index - 1) * size, index * size);
  return {
    code: "200",
    message: "获取成功",
    data: {
      current: index,
      pageSize: size,
      rows: newDatalist,
      total: total,
      totalPages: totalPages,
    },
  };
});
