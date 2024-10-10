const url = "https://7dc790ywi7.execute-api.ap-southeast-1.amazonaws.com/api"


const headers = { "Content-Type": 'application/json' }
export const khachHangAPI = {
  async GET() {
    return fetch(url + "/khach-hang").then(a => a.json())
  },
  async PUT(data) {
    return fetch(url + "/khach-hang", {
      method: "PUT", headers, body: JSON.stringify(data)
    }).then(a => a.json())
  }
}