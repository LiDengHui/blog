---
title: React Hook
date: 2020-04-01 13:41:43
tags:
---

## setState

    const [state, setState] = useState(initialState);

setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

    setState(Object.assign(state,{name:'123'}) // 并不会改变 state中的name
    setState({...state,{name:'123'}}) // 每次都要付给他新的值

## useEffect(fn,[state...])

该 Hook 接收一个包含命令式、且可能有副作用代码的函数。useEffect 的函数会在组件渲染到屏幕之后执行。

    useEffect(() => {
      const subscription = props.source.subscribe();
      return () => {
        // 清除订阅
        subscription.unsubscribe();
      };
    },[state]);

当第二个参数不填，默认为所有state，当state更新都，先执行fn返回函数，后执行fn
当第二个参数为[], 取消所有组件监控，当组件更新，先执行fn返回函数，后执行fn
当第二个参数填一个state，则当前state更新则，先执行fn返回函数，后执行fn

## useRef() 

1. 保存dom元素

        function TextInputWithFocusButton() {
          const inputEl = useRef(null);
          const onButtonClick = () => {
            // `current` 指向已挂载到 DOM 上的文本输入元素
            inputEl.current.focus();
          };
          return (
            <>
              <input ref={inputEl} type="text" />
              <button onClick={onButtonClick}>Focus the input</button>
            </>
          );
        }

2. 保存可变值 但不会渲染到页面上
        
        function TextInputWithFocusButton() {
          const inputEl = useRef(null);
          const save = useRef({name:'123'});
          const onButtonClick = () => {
            // `current` 指向已挂载到 DOM 上的文本输入元素
            save.current.value = inputEl.current.value;
          };
          return (
            <>
              <input ref={inputEl} type="text" />
              <button onClick={onButtonClick}>Focus the input</button>
            </>
          );
        }

## useContext(myContent)
    
     跨多层组件传值，有父组件向子组件，必须与createContext结合使用
    const value = useContext(MyContext);
------------------
    const themes = {
      light: {
        foreground: "#000000",
        background: "#eeeeee"
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222"
      }
    };

    const ThemeContext = React.createContext(themes.light);

    function App() {
      return (
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar(props) {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return (
        <button style={{ background: theme.background, color: theme.foreground }}>
          I am styled by theme context!
        </button>
      );
    }

## useMemo(()=>{},[默认可以不写])

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

渲染过程中执行,与useEffect不同

1. 不给第二个参数，一定执行，每次都渲染视图
2. 第二个参数为[], 数据怎么变都不进行视图渲染
3. 第二个参数为[a],只有当数据a变化的时候才进行视图渲染

## useCallback(()=>{}, []);

    const memoizedCallback = useCallback(
      () => {
        doSomething(a, b);
      },
      [a, b],
    );

和useMemo一样，但是返回的是个函数，函数每次渲染都会执行，但值不变;

1. 不给第二个参数，一定执行，每次值都变
2. 第二个参数为[], 值不变
3. 第二个参数为[a],只有当数据a变化的时候才进行值的变化


## forwordRef((props, ref) => {})

将组件内的domRef直接暴露到组件本身上

    const FancyButton = React.forwardRef((props, ref) => (
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>
    ));

    // 你可以直接获取 DOM button 的 ref：
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;

## useImperativeHandle(ref, ()=> {}, [])

可以在你使用ref时自定义暴露给父组件实例的值。最好与forwardRef结合使用

    function FancyInput(props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));
      return <input ref={inputRef} ... />;
    }
    FancyInput = forwardRef(FancyInput);

第三个参数，监控state的变化

## useLayoutEffect

其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

## 自定义hook

1. 必须以use开头
2. 就是一个普通函数

## useReducer(reducer,初始值，initFn) return [state, dispatch]





