type LayoutProps ={

    children: React.ReactNode;
}

const FeedLayout = ({children} : LayoutProps) => {
  return <div>
    <p>I am Navvvvv</p>
    {children}
  </div>;
};

export default FeedLayout;
