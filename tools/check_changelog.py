import sys, subprocess, re

def staged():
    out = subprocess.check_output(["git", "diff", "--cached", "--name-only"], text=True)
    return out.strip().splitlines()

def check_changelog_diff():
    """Check if changelog has new features (Added: entries)"""
    try:
        diff = subprocess.check_output(["git", "diff", "--cached", "docs/changelog.md"], text=True)
        return bool(re.search(r'^\+.*Added:', diff, re.MULTILINE))
    except subprocess.CalledProcessError:
        return False

def main():
    names = staged()
    
    # Check for docs/agents changes requiring changelog
    if any(n.startswith(("docs/", "agents/")) for n in names):
        if "docs/changelog.md" not in names:
            print("❌ Missing docs/changelog.md in staged changes.")
            sys.exit(1)
    
    # Check for blog posts when changelog has new features
    if "docs/changelog.md" in names and check_changelog_diff():
        blog_posts = [n for n in names if n.startswith("apps/blog/src/content/posts/")]
        if not blog_posts:
            print("❌ New features added to changelog but no blog post staged.")
            print("   CMO must create a blog post in apps/blog/src/content/posts/")
            sys.exit(1)
            
    print("✅ changelog check ok")

if __name__ == "__main__":
    main()
