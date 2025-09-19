import sys, subprocess

def staged():
    out = subprocess.check_output(["git", "diff", "--cached", "--name-only"], text=True)
    return out.strip().splitlines()

def main():
    names = staged()
    if any(n.startswith(("docs/", "agents/")) for n in names):
        if "docs/changelog.md" not in names:
            print("❌ Missing docs/changelog.md in staged changes.")
            sys.exit(1)
    print("✅ changelog check ok")

if __name__ == "__main__":
    main()
