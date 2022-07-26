# WORDLE 

## 실행방법
```
npm install
```

+ 방법1 (http://localhost:9001/)
```
npm run start:dev
```

+ 방법2 (http://localhost:9000/)
```
npm install -g serve
npm run build
npm run start   // Wordle_copy directory에서 해당 명령어를 실행해야 합니다.
```


## 게임방법
5글자의 영어단어를 추측하는 게임
+ 게임의 정답이 APPLE이고 PLACE라는 단어를 입력할 경우, 아래처럼 표시됩니다.

  ![image](https://user-images.githubusercontent.com/58353164/181114005-7b1972ea-3090-4c79-b94a-099d7be617a8.png)
  
+ 타일이 초록색으로 표시된다면 글자가 정답에 포함되고 같은 위치에 있습니다.
+ 타일이 노란색으로 표시된다면 글자가 정답에 포함되지만 같은 위치에 있지는 않습니다.
+ 타일이 회색으로 표시된다면 정답에 포함되지 않는 글자입니다.


## 화면
![image](https://user-images.githubusercontent.com/58353164/181115622-83323db4-7b4b-4829-9310-e462bba12425.png)

![image](https://user-images.githubusercontent.com/58353164/181115486-df66860c-3d4e-4c01-a00b-88b9046d5860.png)
