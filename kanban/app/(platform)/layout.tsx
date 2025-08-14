import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    );
};

export default PlatformLayout;