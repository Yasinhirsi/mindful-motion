import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if (code) {
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    async get(name: string) {
                        return cookieStore.get(name)?.value;
                    },
                    async set(name: string, value: string, options: any) {
                        cookieStore.set({ name, value, ...options });
                    },
                    async remove(name: string, options: any) {
                        cookieStore.set({ name, value: "", ...options, maxAge: 0 });
                    },
                },
            }
        );

        await supabase.auth.exchangeCodeForSession(code);
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin + "/dashboard");
} 