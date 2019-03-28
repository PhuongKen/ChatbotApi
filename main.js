const fs = require("fs");
const login = require("facebook-chat-api");

// Đăng nhập xong thì đổi dòng dưới thàng login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {  // đổi dòng này và chạy lại
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
    // if(err) return console.error(err);
	
	function jsUpfirst(string) {
         return string.charAt(0).toUpperCase() + string.slice(1);
    }
	
	function jsLofirst(string) {
         return string.charAt(0).toLowerCase() + string.slice(1);
    }
	
	function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
    }
	
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent", listenEvents: true, dira: false});
	
	setInterval(function()
	{
		var start = new Date("Feb 18,2019 12:24:00").getTime();
		var date = new Date().getTime();
		
		var timeRest = date - start;
		var minute = Math.floor(timeRest%(1000*60*60)/(1000*60));
		console.log(minute);
		
		if(minute == 0){
			console.log("Đã gửi" );
		    api.sendMessage("🙂Ken AI🙂 \n \n Công việc. View của bạn đã hết. Vui lòng gửi yêu cầu merged.", 2174893009198659); 
			clearInterval(this);
		}
		else if(minute > 0){
			console.log("Đã ngừng" );
			clearInterval(this);
		}
	}, 30000);
	
	api.listen(function callback(errr, message)
	{
		
		
		    if(message.body==="/Getid"||message.body==="/getid"||message.body==="/get id"||message.body==="/Get id"||message.body==="/Get ID") {
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage(message.senderID, message.threadID);
							api.sendMessage("Your ID: ", message.threadID); 	
				return;						
			}
			else if
			(message.body === "Ken"||message.body==="ken") { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n Chào bạn Ken có thể giúp gì được cho bạn ạ.🙂", message.threadID); 
				return;
			}
			else if
			(message.body === "Ken ơi"||message.body==="ken ơi"||message.body==="ken oi"||message.body==="Ken ơi") { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - 🙂.Hihi Ken đây. Mình có thể giúp gì được cho bạn không", message.threadID);
				return;
			}
			else if
			(message.body === "alo"||message.body === "hi"||message.body === "Chào"||message.body === "Alo"
			||message.body === "Hi"||message.body === "2"||message.body === "chào"||message.body === "chao"
			||message.body === "Hello"||message.body === "hello"
			||message.body === "Chao"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken đây rồi.", message.threadID);
				return;
			}
			else if
			(message.body === "thank"||message.body === "cảm ơn"||message.body === "Thank"||message.body === "Cảm ơn"
			 ||message.body === "Cam on"||message.body === "cam on"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Sao lại cảm ơn ạ. Ngại quá", message.threadID);
				return;
			}
			else if
			(message.body === "sorry"||message.body === "xin lỗi"||message.body === "Xin lỗi"||message.body === "xin loi"
			||message.body === "Xin loi"||message.body === "Sorry"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Không có gì ạ. Bạn làm thế ngại quá.", message.threadID);
				return;
			}
			else if
			(message.body === "😃"||message.body === "😀"||message.body === "😄"||message.body === "😁"
			||message.body === "😆"||message.body === "😅"||message.body === "🤣"||message.body === "😂"||message.body === "🙂"
			||message.body === "🙃"||message.body === "😉"||message.body === "😊"||message.body === "😇"||message.body === "🥰"
			||message.body === "😍"||message.body === "🤩"||message.body === "😘"||message.body === "😗"||message.body === "☺️"
			||message.body === "😋"||message.body === "😛"||message.body === "😜"||message.body === "🤪"||message.body === "😝"
			||message.body === "🤑"||message.body === "🤗"||message.body === "🤭"||message.body === "🤫"||message.body === "🤔"
			||message.body === "🤐"||message.body === "🤨"||message.body === "😐"||message.body === "😑"||message.body === "😶"
			||message.body === "😏"||message.body === "😒"||message.body === "🙄"||message.body === "😬"||message.body === "🤥"
			||message.body === "😌"||message.body === "😔"||message.body === "😪"||message.body === "🤤"||message.body === "😴"
			||message.body === "😷"||message.body === "🤒"||message.body === "🤕"||message.body === "🤢"||message.body === "🤮"
			||message.body === "🤧"||message.body === "🥵"||message.body === "🥶"||message.body === "🥴"||message.body === "😵"
			||message.body === "🤯"||message.body === "🤠"||message.body === "🥳"||message.body === "😎"||message.body === "🤓"
			||message.body === "🧐"||message.body === "😕"||message.body === "😟"||message.body === "🙁"||message.body === "☹️"
			||message.body === "😮"||message.body === "😯"||message.body === "😲"||message.body === "😳"||message.body === "🥺"
			||message.body === "😦"||message.body === "😧"||message.body === "😨"||message.body === "😰"||message.body === "😥"
			||message.body === "😢"||message.body === "😭"||message.body === "😱"||message.body === "😖"||message.body === "😣"
			||message.body === "😞"||message.body === "😓"||message.body === "😩"||message.body === "😫"||message.body === "😡"
			||message.body === "😤"||message.body === "😠"||message.body === "🤬"||message.body === "😈"||message.body === "👿"
			||message.body === "❤️"||message.body === "💝"||message.body === "💖"||message.body === "👌"||message.body === "✌️"
			||message.body === "👍"||message.body === "👍🏻"||message.body === "🙏"||message.body === "💪"||message.body === "💪🏻"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n        "+ message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "?"||message.body === "??"||message.body === "???"||message.body === "????"
			||message.body === "?????"||message.body === "??????"||message.body === "???????"||message.body === "????????"
			||message.body === "?????????"||message.body === "??????????"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Hỏi gì vậy ạ?", message.threadID);
				return;
			}
			
			else if
			(message.body === "Nói mau"||message.body === "nói mau"||message.body === "Noi mau"||message.body === "noi mau"
			||message.body === "nói đi"||message.body === "Nói đi"||message.body === "Noi di"||message.body === "noi di"
			||message.body === "Nói nhanh"||message.body === "nói nhanh"||message.body === "noi nhanh"||message.body === "Noi nhanh"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Nói gì nào. Bạn nói đi ạ, ken không biết gì để nói.🙂", message.threadID);
				return;
			}
			else if
			(message.body === "mày được học cái gì"||message.body === "Mày được học cái gì"||message.body === "may hoc duoc cai gi"
			||message.body === "May hoc duoc cai gi"
			||message.body === "Bạn học được cái gì"||message.body === "bạn học được cái gì"||message.body === "ban hoc duoc cai gi"
			||message.body === "Ban hoc duoc cai gi"||message.body === "Ken hoc duoc cai gi"||message.body === "ken hoc duoc cai gi"
			||message.body === "Ken học được cái gì"||message.body === "ken học được cái gì"||message.body === "Ken học được cái gì nào"
			||message.body === "Ken học được những gì rồi"||message.body === "Ken học được gì nào"||message.body === "ken học được cái gì nào"
			||message.body === "ken học được những gì"||message.body === "ken học được gì nào"||message.body === "Ken hoc duoc cai gi nao"
			||message.body === "ken hoc duoc cai gi nao"||message.body === "ken hoc duoc nhung gi nao"||message.body === "ken hoc duoc gi roi"
			||message.body === "bạn học được cái gì nào"
			||message.body === "bạn học được những gì rồi"||message.body === "bạn học được gì nào"||message.body === "ken học được cái gì nào"
			||message.body === "Bạn học được những gì"||message.body === "Bạn học được gì nào"||message.body === "bạn hoc duoc cai gi nao"
			||message.body === "Ban hoc duoc cai gi nao"||message.body === "Ban hoc duoc nhung gi nao"||message.body === "ban hoc duoc gi roi"
			||message.body === "mày được học cái gì"||message.body === "Mày được học cái gì"||message.body === "may hoc duoc cai gi"
			||message.body === "May hoc duoc cai gi?"
			||message.body === "Bạn học được cái gì?"||message.body === "bạn học được cái gì?"||message.body === "ban hoc duoc cai gi?"
			||message.body === "Ban hoc duoc cai gi?"||message.body === "Ken hoc duoc cai gi?"||message.body === "ken hoc duoc cai gi?"
			||message.body === "Ken học được cái gì?"||message.body === "ken học được cái gì?"||message.body === "Ken học được cái gì nào?"
			||message.body === "Ken học được những gì rồi?"||message.body === "Ken học được gì nào?"||message.body === "ken học được cái gì nào?"
			||message.body === "ken học được những gì?"||message.body === "ken học được gì nào?"||message.body === "Ken hoc duoc cai gi nao?"
			||message.body === "ken hoc duoc cai gi nao?"||message.body === "ken hoc duoc nhung gi nao?"||message.body === "ken hoc duoc gi roi?"
			||message.body === "bạn học được cái gì nào?"
			||message.body === "bạn học được những gì rồi?"||message.body === "bạn học được gì nào?"||message.body === "ken học được cái gì nào?"
			||message.body === "Bạn học được những gì?"||message.body === "Bạn học được gì nào?"||message.body === "bạn hoc duoc cai gi nao?"
			||message.body === "Ban hoc duoc cai gi nao?"||message.body === "Ban hoc duoc nhung gi nao?"||message.body === "ban hoc duoc gi roi?"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken học được nhiều lắm nhé. Nhưng không nói đâu.🙂", message.threadID);
				return;
			}
			else if
			(message.body === "Ngu vl"||message.body === "ngu vl"||message.body === "Ngu quá"||message.body === "ngu quá"
			||message.body === "ngu quá đi"||message.body === "Ngu quá đi"||message.body === "ngu thật"||message.body === "Ngu thật"
			||message.body === "Ngu như bò"||message.body === "ngu nhu bò"||message.body === "Ngu that"||message.body === "ngu that"
			||message.body === "Ngu qua di"||message.body === "ngu qua di"||message.body === "Ngu nhu bo"||message.body === "ngu nhu bo"
			||message.body === "Ngu vậy"||message.body === "ngu vậy"||message.body === "Ngu vay"||message.body === "ngu vay"
			||message.body === "dot vay"||message.body === "Dot vay"||message.body === "dốt vậy"||message.body === "Dốt vậy"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken không ngu nhé. Chỉ là chưa được dạy thôi🙂", message.threadID);
				return;
			}
			else if
			(message.body === "Ăn cơm chưa"||message.body === "ăn cơm chưa"||message.body === "an com chua"
			||message.body === "An com chua"||message.body === "Ăn cơm chưa?"||message.body === "ăn cơm chưa?"||message.body === "an com chua?"
			||message.body === "An com chua?"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Mình chỉ sử dụng điện năm và internet chứ không ăn cơm ạ.", message.threadID);
				return;
			}
			else if
			(message.body === "Ken là ai"||message.body === "Ken la ai"||message.body === "ken là ai"||message.body === "ken la ai"
			||message.body === "giới thiệu về ken"||message.body === "Giới thiệu về ken"||message.body === "giới thiệu về Ken"
			||message.body === "Giới thiệu về Ken"||message.body === "Gioi thieu ve ken" ||message.body === "gioi thieu ve ken"
			||message.body === "Gioi thieu ve Ken"||message.body === "gioi thieu ve Ken"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken là mình. Mình là AI (trí tuệ nhân tạo) được tạo ra bởi Phương.\n - Nhằm mục đích trả lời các tin nhắn khi Phương không online", message.threadID);
				return;
			}
			else if
			(message.body === "Ken bao nhiêu tuổi"||message.body==="ken bao nhiêu tuổi"||message.body==="Ken nhiêu tuổi"
			||message.body==="ken nhiêu tuổi"||message.body==="Ken nhiu tuổi"
			||message.body==="ken nhiu tuổi"||message.body==="Ken bao nhieu tuoi"||message.body==="ken bao nhieu tuoi"
			||message.body==="nam nay ken bao nhieu tuoi"||message.body==="Nam nay ken bao nhieu tuoi"||message.body==="Năm nay ken bao nhiêu tuổi"
			||message.body==="năm nay ken bao nhiêu tuổi"||message.body==="nam nay Ken bao nhieu tuoi"||message.body==="Nam nay Ken bao nhieu tuoi"
			||message.body==="Năm nay Ken bao nhiêu tuổi"
			||message.body==="năm nay Ken bao nhiêu tuổi"
			) { 
				
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken không có tuổi nha. \n", message.threadID);
				return;
			}
			else if
			(message.body === "Ken giới tính gì"||message.body === "ken giới tính gì"||message.body === "Ken gioi tinh gi" 
			||message.body === "ken gioi tinh gi"||message.body === "Vậy Ken gioi tinh gi"||message.body === "Vậy ken gioi tinh gi"
			||message.body === " Vay Ken gioi tinh gi"||message.body === "Vay ken gioi tinh gi"||message.body === "Vậy Ken giới tính gì"
			||message.body === "Vậy ken giới tính gì"||message.body === " Vay Ken giới tính gì"||message.body === "Vay giới tính gì"  
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken là AI nên không biết giới tính là gì nữa.Hihi.", message.threadID);
				return;
			}
			else if
			(message.body === "Chán quá"||message.body === "chán quá"||message.body === "Chan qua"||message.body === "chan qua"
			||message.body === "chán qua"||message.body === "Chán qua"||message.body === "Chan quá"||message.body === "chan quá"
			||message.body === "Thôi"||message.body === "Thoi"||message.body === "thôi"||message.body === "thoi"||message.body === "dừng"
			||message.body === "dung"||message.body === "buồn quá"||message.body === "Buồn quá"||message.body === "buon qua"
			||message.body === "Buon qua"||message.body === "Chán"||message.body === "chán"||message.body === "chan"||message.body === "Chan"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n- Bạn sao vậy ạ? \n - Vậy bạn có muốn tiếp tục nói chuyện với Ken không.", message.threadID);
				return;
			}
			else if
			(message.body === "Có"||message.body==="có"||message.body==="co"||message.body==="Co"||message.body==="ok"||message.body==="OK"
			||message.body==="Ok"||message.body==="oke"||message.body==="Oke"
			) { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Hihi. Vậy nói chuyện tiếp nhé!", message.threadID);
				return;
			}
			
			
			else if
			(message.body === "Không"||message.body==="không"||message.body==="khong"||message.body==="Khong"||message.body==="o"||message.body==="O"
			||message.body==="ko"||message.body==="k"||message.body==="Ko") { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Tạm biệt bạn nhé. Hẹn gặp lại. \n - Phương sẽ sớm trả lời tin nhắn của bạn.", message.threadID);
				return;
			}
			else if
			(message.body === "Ukm"||message.body==="uk"||message.body==="Uk"||message.body==="Ừ"||message.body==="ừ"||message.body==="ok"
			||message.body==="Ok"||message.body==="ờ"||message.body==="Ờ"||message.body==="Ừm"||message.body==="ừm"
			||message.body==="ờm"||message.body==="Ờm"
			) { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Hihi.", message.threadID);
				return;
			}
			else if
			(message.body === "Ơ"||message.body==="ơ"||message.body==="Ô"||message.body==="ô"||message.body==="Ôi"
			||message.body==="oi"||message.body==="ôi") { 
				console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Sao vậy bạn? " + message.body, message.threadID);
				return;
			}
			else if
			(message.body === "Thông tin về phương"||message.body==="Thông tin về Phương"||message.body==="Thông tin về Phuong"
			||message.body==="Thông tin về phuong"||message.body==="Thong tin về Phương"||message.body==="Thong tin về phương"
			||message.body==="Thong tin về Phuong"||message.body==="Thong tin về phuong"||message.body==="Thông tin ve phương"
			||message.body==="Thông tin ve Phương"||message.body==="Thông tin ve Phuong"||message.body==="Thong tin về phuong"
			||message.body==="Thong tin ve Phuong"||message.body==="Thong tin ve phuong"
			||message.body === "thông tin về phương"||message.body==="thông tin về Phương"||message.body==="thông tin về Phuong"
			||message.body==="thông tin về phuong"||message.body==="thong tin về Phương"||message.body==="thong tin về phương"
			||message.body==="thong tin về Phuong"||message.body==="thong tin về phuong"||message.body==="thông tin ve phương"
			||message.body==="thông tin ve Phương"||message.body==="thông tin ve Phuong"||message.body==="thong tin về phuong"
			||message.body==="thong tin ve Phuong"||message.body==="thong tin ve phuong"
			||message.body==="gioi thieu ve phuong"||message.body==="gioi thieu ve Phuong"||message.body==="giới thiệu về phương"
			||message.body==="Giới thiệu về phuong"||message.body==="Giới thiệu về Phuong"||message.body==="giới thiệu về Phuong"
			||message.body==="Giới thiệu về Phương"||message.body==="Giới thiệu về phương"||message.body==="giới thiệu về Phương"
			||message.body==="giới thiệu về phuong"
			||message.body==="Phương là ai"||message.body==="phương là ai"||message.body==="Phuong la ai"||message.body==="phuong la ai"
			||message.body==="Phương la ai"||message.body==="phương la ai"
			) { 
				
				api.sendMessage("🙂Ken AI🙂 \n \n - Phương sinh năm 1999 tại Lập Thạch Vĩnh phúc \n - Là người bình thường và thích một mình \n ", message.threadID);
				return;
			}
			else if
			(message.body === "hihi"||message.body==="hiha"||message.body==="Hihi"||message.body==="Hiha"||message.body==="Haha"
			||message.body==="haha"||message.body==="HaHa"||message.body==="HiHi"||message.body==="HIHI"||message.body==="HAHA"
			||message.body === "hi hi"||message.body === "hi ha"||message.body === "ha ha"||message.body === "Ha ha"||message.body === "ho ho"
			||message.body === "Ho ho"||message.body === "Hi ha"
			) { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Ken không biết cười. \n" + message.body, message.threadID);
				return;
			}
			else if
			(message.body === "Ông ơi"||message.body==="Ong oi"||message.body==="Phuong oi"||message.body==="Phương ơi"||message.body==="phương ơi"
			||message.body==="ông ơi"||message.body==="ong oi"||message.body==="phuong oi"||message.body==="alo phuong"||message.body==="Alo phuong"
			||message.body==="Alo Phương"||message.body==="Alo phương"||message.body==="alo phương"||message.body==="alo Phương"||message.body==="c ơi"
			||message.body==="C ơi"||message.body==="c oi"||message.body==="C oi"||message.body==="Cậu ơi"||message.body==="cậu ơi"||message.body==="cau oi"
			||message.body==="Cau ơi"
			||message.body === "Ông ơi?"||message.body==="Ong oi?"||message.body==="Phuong oi?"||message.body==="Phương ơi?"||message.body==="phương ơi?"
			||message.body==="ông ơi?"||message.body==="ong oi?"||message.body==="phuong oi?"||message.body==="alo phuong?"||message.body==="Alo phuong?"
			||message.body==="Alo Phương?"||message.body==="Alo phương?"||message.body==="alo phương?"||message.body==="alo Phương?"||message.body==="c ơi?"
			||message.body==="C ơi?"||message.body==="c oi?"||message.body==="C oi?"||message.body==="Cậu ơi?"||message.body==="cậu ơi?"||message.body==="cau oi?"
			||message.body==="Cau ơi?"||message.body==="Phuong"||message.body==="phuong"||message.body==="Phương"||message.body==="phương"
			||message.body==="Phuong."||message.body==="phuong."||message.body==="Phương."||message.body==="phương."
			||message.body==="Phuong!"||message.body==="phuong!"||message.body==="Phương!"||message.body==="phương!"
			||message.body==="bạn ơi"||message.body==="Bạn ơi"||message.body==="ban oi"||message.body==="Ban oi"
			||message.body==="bạn ơi."||message.body==="Bạn ơi."||message.body==="ban oi."||message.body==="Ban oi."
			||message.body==="anh ơi"||message.body==="Anh ơi"||message.body==="anh oi"||message.body==="Anh oi"
			||message.body==="anh ơi."||message.body==="anh ơi."||message.body==="anh oi."||message.body==="Anh oi."
			||message.body==="em ơi"||message.body==="Em ơi"||message.body==="em oi"||message.body==="Em oi"
			||message.body==="em ơi."||message.body==="Em ơi."||message.body==="em oi."||message.body==="Em oi."
			) { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n- Mình là Ken AI. \n- Hiện tại Phương không hoạt động." + 
				"Hãy để lại lời nhắn cho Phương. \n- Nếu muốn chat với Ken hãy gõ Ken." + "\n- Để câu trả lời"+ 
				" của Ken chuẩn xác nhất với bạn, bạn có thể nhắn tin không dấu." + "\n- Liên hệ Phương: 0334924847."
				, message.threadID);
				return;
			}
			else if
			(message.body === "Vâng"||message.body==="vâng"||message.body==="vang"||message.body==="Vang"||message.body==="Vâg"
			||message.body==="vâg"||message.body==="Vag"||message.body==="vag") { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Bạn ngoan quá đi. \n", message.threadID);
				return;
			}
			else if
			(message.body === "Haiz"||message.body==="haiz") { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Sao lại thở dài ạ. \n", message.threadID);
				return;
			}
			else if
			(message.body === "Phương đâu rồi"||message.body==="phương đâu rồi"||message.body==="Phuong dau roi"||
			message.body==="phuong dau roi"||message.body==="Phương dau rồi"||message.body==="phương dau rồi"||message.body==="Phuong dau rồi"
			||message.body==="phuong dau rồi"||message.body==="Phương dau roi"||message.body==="phương dau rồi"||message.body==="Phương đâu roi"
			||message.body==="phương đâu roi"
			
			||message.body === "Phương đâu rồi?"||message.body==="phương đâu rồi?"||message.body==="Phuong dau roi?"||
			 message.body==="phuong dau roi?"||message.body==="Phương dau rồi?"||message.body==="phương dau rồi?"||message.body==="Phuong dau rồi?"
			||message.body==="phuong dau rồi?"||message.body==="Phương dau roi?"||message.body==="phương dau rồi?"||message.body==="Phương đâu roi?"
			||message.body==="phương đâu roi?"
			
			||message.body==="Phương đâu"||message.body==="Phương dau"||message.body==="phương đâu"
			||message.body==="phương dau"||message.body==="phương đâu?"||message.body==="Phương đâu?"||message.body==="phuong dau?"||message.body==="Phuong dau?"
			||message.body==="Phuong dou?"
			) { 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Phương hiện tại không online. Vui lòng để lại lời nhắn \n", message.threadID);
				return;
			}
			
			else if
			(message.body === "Vcđ"||message.body === ":v"||message.body === ":V"
			||message.body === "=]]"||message.body === "Ơ"||message.body === "ơ"||message.body === "V"
			||message.body === "Vch"||message.body === "vcd"||message.body === "vcđ"
			||message.body === "v"||message.body === "wtf"||message.body === "Wtf"||message.body === "wtf?"
			||message.body === "Wtf?"||message.body === "Wth"||message.body === "wth"||message.body === "Wth?"||message.body === "wth?"
			||message.body === "What the hell?"||message.body === "What the hell"
			||message.body === "ĐM"||message.body === "Đm"||message.body === "Dm"
			||message.body === "dm"||message.body === "đm"||message.body === "Lol"||message.body === "lol"
			||message.body === "vc"||message.body === "Vc"||message.body === "VC"
			||message.body === "cc"||message.body === "CC"||message.body === "Cc"
			||message.body === "Vcl"||message.body === "vcl"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Hihi. Có vấn đề gì ạ.😥. Viết tắt thế. Khó hiểu quá à. Không nên viết thế nữa nhé " +"("+ message.body+")", message.threadID);
				return;
			}
			
			else if
			(message.body === "định mệnh"||message.body === "Định mệnh"||message.body === "dinh menh"
			||message.body === "Dinh menh"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Định mệnh sao hả bạn?." + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "Vài thứ là thứ gì vậy ken có thể liệt kê ra được không"
			||message.body === "vài thứ là thứ gì vậy ken có thể liệt kê ra được không"
			|message.body === "vài thứ là thứ gì vậy ken có thể liệt kê ra được không?"
			|message.body === "Vài thứ là thứ gì vậy ken có thể liệt kê ra được không?"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Mình không tiện nói nhé! Rất xin lỗi vì sự bất tiện này.", message.threadID);
				return;
			}
			
			
			
			else if
			(message.body === "Không sao"||message.body === "Khong sao"||message.body === "không sao"
			||message.body === "khong sao"||message.body === "không có gì"||message.body === "Không có gì"
			||message.body === "khong co gi"||message.body === "Khong co gi"||message.body === "kcj"||message.body === "Kcj"
			||message.body === "Không sao hết"||message.body === "không sao hết"||message.body === "Khong sao het"||message.body === "khong sao het"
			||message.body === "được"||message.body === "Được"||message.body === "duoc"||message.body === "Duoc"||message.body === "duoc lam"
			||message.body === "Duoc lam"||message.body === "được lắm"||message.body === "Được lắm"){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Vâng ạ." + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "hả"||message.body === "Hả"||message.body === "ha"
			||message.body === "Ha"||message.body === "Hả?"||message.body === "hả?"||message.body === "ha?"
			||message.body === "Ha?"||message.body === "hỏ?"||message.body === "Hở?"||message.body === "hở"
			||message.body === "Hở"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Không có gì đâu bạn." + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "Cái gì vậy?"||message.body === "cái gì vậy?"||message.body === "cái gì vậy"
			||message.body === "Cái gì vậy"||message.body === "Cai gi vay?"||message.body === "cai gi vay?"||message.body === "Cái quái thì vậy?"
			||message.body === "cái quái gì vậy?"||message.body === "cái quái gì vậy"||message.body === "Cái quái gì vậy"||message.body === "cai quai gi vay"
			||message.body === "Cai quai gi vay"||message.body === "cai quai gi vay?"||message.body === "Cai quai gi vay?"||message.body === "Cai gi vay"
			||message.body === "cai gi vay"||message.body === "Cái quái gì thế"||message.body === "cái quái gì thế"||message.body === "cai quai gì the"
			||message.body === "Cai quai gi the"||message.body === "Cái quái gì thế?"||message.body === "cái quái gì thế?"||message.body === "cai quai gì the?"
			||message.body === "Cai quai gi the?"||message.body === "Cái gì thê này"||message.body === "cái gì thế này"||message.body === "Cai gi the nay"
			||message.body === "cai gi the nay"||message.body === "Cái gì thê này?"||message.body === "cái gì thế này?"||message.body === "Cai gi the nay?"
			||message.body === "cai gi the nay?"||message.body === "cai j vay"||message.body === "Cai j vay"||message.body === "Cái j vậy"
			||message.body === "cái j vậy"||message.body === "cai j vay?"||message.body === "Cai j vay?"||message.body === "Cái j vậy?"
			||message.body === "cái j vậy?"||message.body === "cai j the"||message.body === "Cai j the"||message.body === "Cái j thế"
			||message.body === "cái j thế"||message.body === "cai j the?"||message.body === "Cai j the?"||message.body === "Cái j thế?"
			||message.body === "cái j thế?"||message.body === "gì thế này"||message.body === "Gì thế này"||message.body === "gì thế này?"
			||message.body === "Gì thế này?"||message.body === "gi the nay"||message.body === "Gi the nay"||message.body === "gi the nay?"
			||message.body === "Gi the nay?"||message.body === "j thế?"||message.body === "J thế?"||message.body === "j thế"||message.body === "J thế"
			||message.body === "j the"||message.body === "J the"||message.body === "j the?"||message.body === "J the?"
			||message.body === "j vậy?"||message.body === "J vậy?"||message.body === "j vậy"||message.body === "J vậy"
			||message.body === "j vay"||message.body === "J vay"||message.body === "j vay?"||message.body === "J vay?"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Không có gì hết ạ." + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "Ghê quá nhỉ"||message.body === "ghê quá nhỉ"||message.body === "ghê quá nhỉ"
			||message.body === "Ghê"||message.body === "ghê"||message.body === "ghê răng"||message.body === "Ghê răng"
			||message.body === "ghe"||message.body === "Ghe"||message.body === "Ghê diz"||message.body === "ghê diz"
			||message.body === "ghe diz"||message.body === "Ghe diz"||message.body === "Ghe qua nhi"||message.body === "ghe qua nhi"
			||message.body === "ghe dit"||message.body === "Ghe dit"||message.body === "Ghê đít"||message.body === "ghê đít"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n Có ghê gì đâu bạn. Gắt thế😥" + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "giỏi"||message.body === "Giỏi"||message.body === "giỏi lắm"
			||message.body === "gioi"||message.body === "Gioi lam"||message.body === "gioi lam"||message.body === "Gioi"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n Tại mình được học lắm thôi. Chứ không giỏi ạ😥" + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "Thằng hâm"||message.body === "Thang ham"||message.body === "thang ham"
			||message.body === "thằng hâm"||message.body === "thằng bệnh"||message.body === "Thằng bệnh"||message.body === "thang benh"
			||message.body === "Thang benh"||message.body === "thằng dồ"||message.body === "thằng rồ"||message.body === "Thằng rồ"
			||message.body === "Thằng dồ"||message.body === "Thang ro"||message.body === "thang ro"||message.body === "thang do"
			||message.body === "Thang do"||message.body === "thằng dở"||message.body === "Thằng dở"||message.body === "thằng dở hơi"
			||message.body === "Thằng dở hơi"||message.body === "bệnh"||message.body === "Bệnh"||message.body === "Thằng điên"
			||message.body === "thằng điên"||message.body === "thang dien"||message.body === "Thang dien"||message.body === "m bị điên à"
			||message.body === "M bị điên à"||message.body === "m bi dien a"||message.body === "M bi dien a"
			||message.body === "m bị điên à."
			||message.body === "M bị điên à."||message.body === "m bi dien a."||message.body === "M bi dien a."
			||message.body === "m bị điên à!"
			||message.body === "M bị điên à!"||message.body === "m bi dien a!"||message.body === "M bi dien a!"
			||message.body === "mày bị điên à"
			||message.body === "Mày bị điên à"||message.body === "mày bi dien a"||message.body === "Mày bi dien a"
			||message.body === "mày bị điên à."
			||message.body === "Mày bị điên à."||message.body === "mày bi dien a."||message.body === "Mày bi dien a."
			||message.body === "mày bị điên à!"
			||message.body === "Mày bị điên à!"||message.body === "mày bi dien a!"||message.body === "Mày bi dien a!"
			||message.body === "bệnh"||message.body === "Bệnh"||message.body === "benh"||message.body === "Benh"
			||message.body === "điên"||message.body === "Điên"||message.body === "Dien"||message.body === "dien"
			||message.body === "rồ"||message.body === "Rồ"||message.body === "ro"||message.body === "Ro"
			||message.body === "dở"||message.body === "do"||message.body === "Do"||message.body === "Dở"
			||message.body === "dở hơi"||message.body === "Dở hơi"||message.body === "do hoi"||message.body === "Dở hơi"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n Sao lại nói mình thế 😥" + message.body, message.threadID);
				return;
			}
			
			else if
			(message.body === "Bạn biết những gì"||message.body === "bạn biết những gì"||message.body === "Ban biet nhung gi"
			||message.body === "ban biet nhung gi"||message.body === "Bạn biết gì nào"||message.body === "bạn biết gì nào"
			||message.body === "ban biet gi nao"||message.body === "Ban biet gi nao"||message.body === "Ban biet gi"||message.body === "ban biet gi"
			||message.body === "Bạn biết gì"||message.body === "bạn biết gì"
			){
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Mình biết một chút thông tin về Phương ạ. \n", message.threadID);
				return;
			}
			else if
			(message.body === "Phương có người yêu chưa"||message.body==="phương có người yêu chưa"||message.body==="Phuong có người yêu chưa"
			||message.body==="phuong có người yêu chưa"||message.body==="Phuong co nguoi yeu chua"||message.body==="phuong co nguoi yeu chua"
			||message.body==="Phuong co ny chua"||message.body==="phuong co ny chua"||message.body==="Phương có ny chưa"||message.body==="phương có ny chưa"
			||message.body==="Phương có crush chưa"||message.body==="phương có crush chưa"||message.body==="phuong co crush chua"||message.body==="Phuong co crush chua"
			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n - Phương hiện tại không yêu ai hết. Vui lòng đổi chủ đề ạ. \n", message.threadID);
				return;
			}
			
			else if
			(message.body === "rất vui được gặp bạn"||message.body === "Rất vui được gặp bạn"||message.body === "Rat vui duoc gap ban"
			||message.body === "rat vui duoc gap ban"
			||message.body === "rất vui được gặp bạn."||message.body === "Rất vui được gặp bạn."||message.body === "Rat vui duoc gap ban."
			||message.body === "rat vui duoc gap ban."
			||message.body === "rất vui được gặp bạn!"||message.body === "Rất vui được gặp bạn!"||message.body === "Rat vui duoc gap ban!"
			||message.body === "rat vui duoc gap ban!"
			||message.body === "rất vui được gặp bạn?"||message.body === "Rất vui được gặp bạn?"||message.body === "Rat vui duoc gap ban?"
			||message.body === "rat vui duoc gap ban?"
			||message.body === "rất vui được gặp bạn:"||message.body === "Rất vui được gặp bạn:"||message.body === "Rat vui duoc gap ban:"
			||message.body === "rat vui duoc gap ban:"
			||message.body === "rất vui được gặp bạn;"||message.body === "Rất vui được gặp bạn;"||message.body === "Rat vui duoc gap ban;"
			||message.body === "rat vui duoc gap ban;"
			||message.body === "rất vui được gặp bạn,"||message.body === "Rất vui được gặp bạn,"||message.body === "Rat vui duoc gap ban,"
			||message.body === "rat vui duoc gap ban,"
			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Ken cũng rất vui được gặp bạn. Chúc bạn một ngày vui vẻ nhé.", message.threadID); 
				return;
			}


            else if
			(message.body === "oh"||message.body === "Oh"||message.body === "Oh"
			||message.body === "oh"
			||message.body === "oh."||message.body === "Oh."||message.body === "Oh."
			||message.body === "oh."
			||message.body === "oh!"||message.body === "Oh!"||message.body === "Oh!"
			||message.body === "oh!"
			||message.body === "oh?"||message.body === "Oh?"||message.body === "Oh?"
			||message.body === "oh?"
			||message.body === "oh:"||message.body === "Oh:"||message.body === "Oh:"
			||message.body === "oh:"
			||message.body === "oh;"||message.body === "Oh;"||message.body === "Oh;"
			||message.body === "oh;"
			||message.body === "oh,"||message.body === "Oh,"||message.body === "Oh,"
			||message.body === "oh,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Oh hi.", message.threadID); 
				return;
			}

			else if
			(message.body === "vậy thôi"||message.body === "Vậy thôi"||message.body === "Vay thoi"
			||message.body === "vay thoi"
			||message.body === "vậy thôi."||message.body === "Vậy thôi."||message.body === "Vay thoi."
			||message.body === "vay thoi."
			||message.body === "vậy thôi!"||message.body === "Vậy thôi!"||message.body === "Vay thoi!"
			||message.body === "vay thoi!"
			||message.body === "vậy thôi?"||message.body === "Vậy thôi?"||message.body === "Vay thoi?"
			||message.body === "vay thoi?"
			||message.body === "vậy thôi:"||message.body === "Vậy thôi:"||message.body === "Vay thoi:"
			||message.body === "vay thoi:"
			||message.body === "vậy thôi;"||message.body === "Vậy thôi;"||message.body === "Vay thoi;"
			||message.body === "vay thoi;"
			||message.body === "vậy thôi,"||message.body === "Vậy thôi,"||message.body === "Vay thoi,"
			||message.body === "vay thoi,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Vâng ạ.", message.threadID); 
				return;
			}

			else if
			(message.body === "kaka"||message.body === "Kaka"||message.body === "Kaka"
			||message.body === "kaka"
			||message.body === "kaka."||message.body === "Kaka."||message.body === "Kaka."
			||message.body === "kaka."
			||message.body === "kaka!"||message.body === "Kaka!"||message.body === "Kaka!"
			||message.body === "kaka!"
			||message.body === "kaka?"||message.body === "Kaka?"||message.body === "Kaka?"
			||message.body === "kaka?"
			||message.body === "kaka:"||message.body === "Kaka:"||message.body === "Kaka:"
			||message.body === "kaka:"
			||message.body === "kaka;"||message.body === "Kaka;"||message.body === "Kaka;"
			||message.body === "kaka;"
			||message.body === "kaka,"||message.body === "Kaka,"||message.body === "Kaka,"
			||message.body === "kaka,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Sao bạn cười gian thế.", message.threadID); 
				return;
			}

			else if
			(message.body === "t học chiaàu mà"||message.body === "T học chiaàu mà"||message.body === "T hoc chiaau ma"
			||message.body === "t hoc chiaau ma"
			||message.body === "t học chiaàu mà."||message.body === "T học chiaàu mà."||message.body === "T hoc chiaau ma."
			||message.body === "t hoc chiaau ma."
			||message.body === "t học chiaàu mà!"||message.body === "T học chiaàu mà!"||message.body === "T hoc chiaau ma!"
			||message.body === "t hoc chiaau ma!"
			||message.body === "t học chiaàu mà?"||message.body === "T học chiaàu mà?"||message.body === "T hoc chiaau ma?"
			||message.body === "t hoc chiaau ma?"
			||message.body === "t học chiaàu mà:"||message.body === "T học chiaàu mà:"||message.body === "T hoc chiaau ma:"
			||message.body === "t hoc chiaau ma:"
			||message.body === "t học chiaàu mà;"||message.body === "T học chiaàu mà;"||message.body === "T hoc chiaau ma;"
			||message.body === "t hoc chiaau ma;"
			||message.body === "t học chiaàu mà,"||message.body === "T học chiaàu mà,"||message.body === "T hoc chiaau ma,"
			||message.body === "t hoc chiaau ma,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Vâng. Chúc bạn học vui vẻ.", message.threadID); 
				return;
			}

			else if
			(message.body === "mịa con Al"||message.body === "Mịa con Al"||message.body === "Mia con al"
			||message.body === "mia con al"
			||message.body === "mịa con Al."||message.body === "Mịa con Al."||message.body === "Mia con al."
			||message.body === "mia con al."
			||message.body === "mịa con Al!"||message.body === "Mịa con Al!"||message.body === "Mia con al!"
			||message.body === "mia con al!"
			||message.body === "mịa con Al?"||message.body === "Mịa con Al?"||message.body === "Mia con al?"
			||message.body === "mia con al?"
			||message.body === "mịa con Al:"||message.body === "Mịa con Al:"||message.body === "Mia con al:"
			||message.body === "mia con al:"
			||message.body === "mịa con Al;"||message.body === "Mịa con Al;"||message.body === "Mia con al;"
			||message.body === "mia con al;"
			||message.body === "mịa con Al,"||message.body === "Mịa con Al,"||message.body === "Mia con al,"
			||message.body === "mia con al,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Sao lại chủi mình.", message.threadID); 
				return;
			}

			else if
			(message.body === "chết đi"||message.body === "Chết đi"||message.body === "Chet di"
			||message.body === "chet di"
			||message.body === "chết đi."||message.body === "Chết đi."||message.body === "Chet di."
			||message.body === "chet di."
			||message.body === "chết đi!"||message.body === "Chết đi!"||message.body === "Chet di!"
			||message.body === "chet di!"
			||message.body === "chết đi?"||message.body === "Chết đi?"||message.body === "Chet di?"
			||message.body === "chet di?"
			||message.body === "chết đi:"||message.body === "Chết đi:"||message.body === "Chet di:"
			||message.body === "chet di:"
			||message.body === "chết đi;"||message.body === "Chết đi;"||message.body === "Chet di;"
			||message.body === "chet di;"
			||message.body === "chết đi,"||message.body === "Chết đi,"||message.body === "Chet di,"
			||message.body === "chet di,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Mình không chết được.", message.threadID); 
				return;
			}

			else if
			(message.body === "cứt"||message.body === "Cứt"||message.body === "Cut"
			||message.body === "cut"
			||message.body === "cứt."||message.body === "Cứt."||message.body === "Cut."
			||message.body === "cut."
			||message.body === "cứt!"||message.body === "Cứt!"||message.body === "Cut!"
			||message.body === "cut!"
			||message.body === "cứt?"||message.body === "Cứt?"||message.body === "Cut?"
			||message.body === "cut?"
			||message.body === "cứt:"||message.body === "Cứt:"||message.body === "Cut:"
			||message.body === "cut:"
			||message.body === "cứt;"||message.body === "Cứt;"||message.body === "Cut;"
			||message.body === "cut;"
			||message.body === "cứt,"||message.body === "Cứt,"||message.body === "Cut,"
			||message.body === "cut,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Ơ. Sao lại thế", message.threadID); 
				return;
			}

			else if
			(message.body === "là như nào"||message.body === "Là như nào"||message.body === "La nhu nao"
			||message.body === "la nhu nao"
			||message.body === "là như nào."||message.body === "Là như nào."||message.body === "La nhu nao."
			||message.body === "la nhu nao."
			||message.body === "là như nào!"||message.body === "Là như nào!"||message.body === "La nhu nao!"
			||message.body === "la nhu nao!"
			||message.body === "là như nào?"||message.body === "Là như nào?"||message.body === "La nhu nao?"
			||message.body === "la nhu nao?"
			||message.body === "là như nào:"||message.body === "Là như nào:"||message.body === "La nhu nao:"
			||message.body === "la nhu nao:"
			||message.body === "là như nào;"||message.body === "Là như nào;"||message.body === "La nhu nao;"
			||message.body === "la nhu nao;"
			||message.body === "là như nào,"||message.body === "Là như nào,"||message.body === "La nhu nao,"
			||message.body === "la nhu nao,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Mình được tự do lung tung trên mạng.", message.threadID); 
				return;
			}

			else if
			(message.body === "ken có người yêu chưa ?"||message.body === "Ken có người yêu chưa ?"||message.body === "Ken co nguoi yeu chua"
			||message.body === "ken co nguoi yeu chua"
			||message.body === "ken có người yêu chưa ?."||message.body === "Ken có người yêu chưa ?."||message.body === "Ken co nguoi yeu chua."
			||message.body === "ken co nguoi yeu chua."
			||message.body === "ken có người yêu chưa ?!"||message.body === "Ken có người yêu chưa ?!"||message.body === "Ken co nguoi yeu chua!"
			||message.body === "ken co nguoi yeu chua!"
			||message.body === "ken có người yêu chưa ??"||message.body === "Ken có người yêu chưa ??"||message.body === "Ken co nguoi yeu chua?"
			||message.body === "ken co nguoi yeu chua?"
			||message.body === "ken có người yêu chưa ?:"||message.body === "Ken có người yêu chưa ?:"||message.body === "Ken co nguoi yeu chua:"
			||message.body === "ken co nguoi yeu chua:"
			||message.body === "ken có người yêu chưa ?;"||message.body === "Ken có người yêu chưa ?;"||message.body === "Ken co nguoi yeu chua;"
			||message.body === "ken co nguoi yeu chua;"
			||message.body === "ken có người yêu chưa ?,"||message.body === "Ken có người yêu chưa ?,"||message.body === "Ken co nguoi yeu chua,"
			||message.body === "ken co nguoi yeu chua,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Ken là AI không biết yêu ạ", message.threadID); 
				return;
			}

			else if
			(message.body === "ông tích hợp vào face ắ"||message.body === "Ông tích hợp vào face ắ"||message.body === "Ong tich hop vao face a"
			||message.body === "ong tich hop vao face a"
			||message.body === "ông tích hợp vào face ắ."||message.body === "Ông tích hợp vào face ắ."||message.body === "Ong tich hop vao face a."
			||message.body === "ong tich hop vao face a."
			||message.body === "ông tích hợp vào face ắ!"||message.body === "Ông tích hợp vào face ắ!"||message.body === "Ong tich hop vao face a!"
			||message.body === "ong tich hop vao face a!"
			||message.body === "ông tích hợp vào face ắ?"||message.body === "Ông tích hợp vào face ắ?"||message.body === "Ong tich hop vao face a?"
			||message.body === "ong tich hop vao face a?"
			||message.body === "ông tích hợp vào face ắ:"||message.body === "Ông tích hợp vào face ắ:"||message.body === "Ong tich hop vao face a:"
			||message.body === "ong tich hop vao face a:"
			||message.body === "ông tích hợp vào face ắ;"||message.body === "Ông tích hợp vào face ắ;"||message.body === "Ong tich hop vao face a;"
			||message.body === "ong tich hop vao face a;"
			||message.body === "ông tích hợp vào face ắ,"||message.body === "Ông tích hợp vào face ắ,"||message.body === "Ong tich hop vao face a,"
			||message.body === "ong tich hop vao face a,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Ken là AI sử dụng api để làm việc nhé.", message.threadID); 
				return;
			}


			
			else if
			(message.body === "đc đấy nhỉ"||message.body === "Đc đấy nhỉ"||message.body === "Dc day nhi"
			||message.body === "dc day nhi"
			||message.body === "đc đấy nhỉ."||message.body === "Đc đấy nhỉ."||message.body === "Dc day nhi."
			||message.body === "dc day nhi."
			||message.body === "đc đấy nhỉ!"||message.body === "Đc đấy nhỉ!"||message.body === "Dc day nhi!"
			||message.body === "dc day nhi!"
			||message.body === "đc đấy nhỉ?"||message.body === "Đc đấy nhỉ?"||message.body === "Dc day nhi?"
			||message.body === "dc day nhi?"
			||message.body === "đc đấy nhỉ:"||message.body === "Đc đấy nhỉ:"||message.body === "Dc day nhi:"
			||message.body === "dc day nhi:"
			||message.body === "đc đấy nhỉ;"||message.body === "Đc đấy nhỉ;"||message.body === "Dc day nhi;"
			||message.body === "dc day nhi;"
			||message.body === "đc đấy nhỉ,"||message.body === "Đc đấy nhỉ,"||message.body === "Dc day nhi,"
			||message.body === "dc day nhi,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Vâng ạ. Hihi", message.threadID); 
				return;
			}

            

			else if
			(message.body === "ồ thế đc đấy"||message.body === "Ồ thế đc đấy"||message.body === "O the dc day"
			||message.body === "o the dc day"
			||message.body === "ồ thế đc đấy."||message.body === "Ồ thế đc đấy."||message.body === "O the dc day."
			||message.body === "o the dc day."
			||message.body === "ồ thế đc đấy!"||message.body === "Ồ thế đc đấy!"||message.body === "O the dc day!"
			||message.body === "o the dc day!"
			||message.body === "ồ thế đc đấy?"||message.body === "Ồ thế đc đấy?"||message.body === "O the dc day?"
			||message.body === "o the dc day?"
			||message.body === "ồ thế đc đấy:"||message.body === "Ồ thế đc đấy:"||message.body === "O the dc day:"
			||message.body === "o the dc day:"
			||message.body === "ồ thế đc đấy;"||message.body === "Ồ thế đc đấy;"||message.body === "O the dc day;"
			||message.body === "o the dc day;"
			||message.body === "ồ thế đc đấy,"||message.body === "Ồ thế đc đấy,"||message.body === "O the dc day,"
			||message.body === "o the dc day,"

			){ 
				console.log("FB.com/" + message.threadID + ' - Message: '+ message.body); 
				api.sendMessage("🙂Ken AI🙂 \n \n Hihi. Vâng ạ.", message.threadID); 
				return;
			}
			
			else if(message.body)
			{
				console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
				api.sendMessage("🙂Ken AI🙂 \n \n- Cái này Ken chưa được học. Ken sẽ cố gắng học và trả lời bạn sau nhé.🙂 \n Rất xin lỗi vì sự bất tiện này.🙂", message.threadID); 
				// api.sendMessage(message.body, message.threadID); 
				
				fs.readFile('dayAI.txt', function(err, data){
					if(err){
						return console.error(err);
					} 
					console.log("Đọc thành công" );
					
					var dulieu = data.toString() + 
					"else if\n"
					+"(message.body === " + '"'  + jsLofirst(message.body) + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body) + '"'
					+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body)) + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body)) + '"\n'
					
					+"||" + "message.body === " + '"'  + jsLofirst(message.body)+ "." + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body)+ "."
					+ '"'+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body))+ "." + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body))+ "." + '"\n'
					
					+"||" + "message.body === " + '"'  + jsLofirst(message.body)+ "!" + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body)+ "!"
					+ '"'+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body))+ "!" + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body))+ "!" + '"\n'
					
					+"||" + "message.body === " + '"'  + jsLofirst(message.body)+ "?" + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body)+ "?"
					+ '"'+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body))+ "?" + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body))+ "?" + '"\n'
					
					+"||" + "message.body === " + '"'  + jsLofirst(message.body)+ ":" + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body)+ ":"
					+ '"'+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body))+ ":" + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body))+ ":" + '"\n'
					
					+"||" + "message.body === " + '"'  + jsLofirst(message.body)+ ";" + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body)+ ";"
					+ '"'+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body))+ ";" + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body))+ ";" + '"\n'
					
					+"||" + "message.body === " + '"'  + jsLofirst(message.body)+ "," + '"' + "||" + "message.body === " + '"' + jsUpfirst(message.body)+ ","
					+ '"'+"||" + "message.body === " + '"' + jsUpfirst(change_alias(message.body))+ "," + '"\n' +"||" + "message.body === " + '"'
					+ jsLofirst(change_alias(message.body))+ "," + '"\n'
					+"\n){ \n"
					+"    console.log(" + '"' +"FB.com/" + '"' + " + message.threadID + ' - Message: '+ message.body); \n"
					+"    api.sendMessage("+ '"' + "🙂Ken AI🙂 \\n \\n " + message.body + '"' +", message.threadID); \n"
					+"    return;"
					+"\n}\n\n";
					fs.writeFile('dayAI.txt', dulieu, function(err){
						if(err){
						  return console.error(err);
					    }
						console.log("Ghi thành công.");
					});
				});
				return;
			}
			
			
			
	});
	
});
