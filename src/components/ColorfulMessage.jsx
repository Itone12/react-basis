export const ColorfulMessage = (props) => {
  const { color, children } = props;
  //分割代入することでより見やすく書くことができる
  //関数の引数の時点でpropsではなく,{color, children}と書くこともできるので、どちらもわかるようにしておこう!!
  const contentStyleA = {
    color,
    fontSize: '18px',
  };

  return <p style={contentStyleA}>{children}</p>;
};
