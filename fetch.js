```jsx
const url = "https://mandarin.api.weniv.co.kr";

try{

	const res = await fetch(url+"/user/login/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body : JSON.stringify({
                        "user":{
                            "email": emailAddr.value,
                            "password": pw.value
                        }
                    })
                });
	const resJson = await res.json();
	console.log(resJson);
} catch(err){
  console.error(err);
}
```
