// src/components/ui/atoms/Metadata/AuthorMeta.tsx
import { cn } from '@/lib/cn';
import { Avatar } from '@heroui/react';
import { forwardRef, HTMLAttributes } from 'react';

interface AuthorMetaProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    role?: string;
    avatarSrc?: string;
    size?: 'sm' | 'md';
    className?: string;
}

/**
 * Author byline atom — displays avatar with name and optional role/title.
 *
 * Uses HeroUI v3 Avatar with dot-notation sub-components:
 *   <Avatar> <Avatar.Image /> <Avatar.Fallback /> </Avatar>
 *
 * Fix applied: removed manual `avatarFallback` prop (Avatar.Fallback
 * auto-generates initials from the `name` if no src is provided).
 */
export const AuthorMeta = forwardRef<HTMLDivElement, AuthorMetaProps>(
    (
        {
            name,
            role,
            avatarSrc,
            size = 'md',
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn('flex items-center gap-3', className)}
                {...props}
            >
                <Avatar size={size}>
                    {avatarSrc && <Avatar.Image src={avatarSrc} alt={name} />}
                    <Avatar.Fallback>
                        {name.slice(0, 2).toUpperCase()}
                    </Avatar.Fallback>
                </Avatar>

                <div className="flex flex-col">
                    <span className="font-medium text-foreground leading-tight">
                        {name}
                    </span>
                    {role && (
                        <span className="text-sm text-muted leading-tight">
                            {role}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);

AuthorMeta.displayName = 'AuthorMeta';