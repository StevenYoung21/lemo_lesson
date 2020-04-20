// console.log('hellow member');

// 
interface MembersEntity{
    id: number;
    name: string;
    avatar: string;
}

const members: MembersEntity[] = [
  {
      id: 1314,
      name:'小黄',
      avatar:'https://media-image1.baydn.com/avatar%2Fmedia_store%2F3d794d06d9ba31f6bd8867cfeb5f9276.png?x-oss-process=image/resize,h_128,w_128'
  },
  {
      id: 520,
      name: '小白',
      avatar:'https://media-image1.baydn.com/op_pub_image/kbralb/2ccabe2a8f786100fd641832d0b51422.b1d4e023e3d31e650bc3e06d12ede1ae.png'
  },
  {
      id: 1010,
      name:'小绿',
      avatar:'https://media-image1.baydn.com/badgeer_pub_img/badge_image/5a410fbd692808fab21e76e5a5164f85.785da33b794f11140b99f2854d88242e.png'
  }

]

// console.log(members);

const tbody = document.querySelector('#member tbody');   // # -> id 选择器
tbody.innerHTML = members.map((member) =>{
    return `
            <tr>
                <td>${member.id}</td>
                <td>${member.name}</td>
                <td>
                    <img src="${member.avatar}" style="height:92px" style="width: 92px">
                </td>
            </tr>
    `
}).join('')