import csv
import json


def csv_to_json(csv_file, json_file):
    data = []

    with open(csv_file, 'r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            data.append(row)

    with open(json_file, 'w') as file:
        json.dump(data, file, indent=4)

csv_file = 'Jobs_NYC_Postings_20241116.csv'
json_file = 'Jobs_NYC_Postings_20241116.json'

csv_to_json(csv_file, json_file)

print(f'CSV file "{csv_file}" has been converted to JSON file "{json_file}".')

