const MarketingLayout = ( {
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-slate-100">
            {/*Навигация*/}
            <main className="pt-40 pb-20 bg-slate-100">
                {children}
            </main>
            {/*Футер*/}
        </div>
    );
};

export default MarketingLayout;