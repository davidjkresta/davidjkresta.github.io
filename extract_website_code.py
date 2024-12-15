import os
import datetime

def extract_files(directory, output_file):
    """
    Combines the contents of all relevant files (HTML, CSS, JS) in the website directory
    into a single output file. Handles text files only and ignores binary files like images.
    """
    relevant_extensions = ['.html', '.css', '.js']  # File types to extract
    combined_code = []
    skipped_files = []

    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            _, ext = os.path.splitext(file)
            if ext in relevant_extensions:
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        combined_code.append(f"\n===== FILE: {os.path.relpath(file_path, directory)} =====\n")
                        combined_code.append(f.read())
                        combined_code.append("\n\n")
                except Exception as e:
                    print(f"Error reading '{file_path}': {e}")
            else:
                skipped_files.append(file_path)

    if combined_code:
        try:
            with open(output_file, 'w', encoding='utf-8') as output:
                output.writelines(combined_code)
            print(f"Extraction completed. Combined code written to '{output_file}'.")
        except Exception as e:
            print(f"Error writing to '{output_file}': {e}")
    else:
        print("No files were successfully extracted.")

    if skipped_files:
        print("\nThe following files were skipped (non-text or unsupported formats):")
        for file in skipped_files:
            print(f"  - {os.path.relpath(file, directory)}")

def main():
    """
    Main function to extract the website's structure and combine the contents into one file.
    """
    directory = '.'  # Root directory of the website
    timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    output_file = f'combined_website_{timestamp}.txt'

    extract_files(directory, output_file)


if __name__ == '__main__':
    main()
