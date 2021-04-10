#!/bin/bash

# the site address we want to get the health of
SITE_ADDRESS="https://richardswesterhof.github.io"
STATUS_OK="200"

# obtain the status code of the side with curl
SITE_STATUS=$(curl -s -o /dev/null -I -w "%{http_code}\n" "$SITE_ADDRESS")

NOW=$(date +"%Y-%m-%d %T")

RECIPIENT="richardswesterhof@gmail.com"
SENDER="richardsepicbot@gmail.com"

printf "$NOW: "

# check if the code is 200
if [ "$SITE_STATUS" = "$STATUS_OK" ]; then
	printf "Health Check OK"
	# if there previously was an error on the site, send an email notifying it is fixed
	if [ "$PREV_SITE_HEALTH_CHECK" = "FAILED" ]; then
		SUBJECT="[PROBLEM SOLVED] Woohoo! No more fucky wuckies on the site :)"
		BODY="I don't what you did, but it worked! The site is looking healthy again.\nKeep up the great work!"
		printf "$To: RECIPIENT\nFrom: SENDER\nSubject: $SUBJECT\n$BODY\n" | msmtp --read-envelope-from "$RECIPIENT"
	fi

	export PREV_SITE_HEALTH_CHECK="OK"
# error :(
else
	printf "Health Check Failed with status code $SITE_STATUS"
	export PREV_SITE_HEALTH_CHECK="FAILED"
	# if there previously was no error, send an email notifying something is wrong
	if [ "$PREV_SITE_HEALTH_CHECK" != "FAILED" ]; then
		SUBJECT="[STATUS CODE $SITE_STATUS] Oopsie floopsie, there seems to be a fucky wucky with the site :("
		BODY="The health check performed at $NOW returned code $SITE_STATUS.\nSo yeah, looks like something got screwed up and I can't reach the site. Could be on my side, could be global.\nCheck it out when you have time k?"
		printf "$To: RECIPIENT\nFrom: SENDER\nSubject: $SUBJECT\n$BODY\n" | msmtp --read-envelope-from "$RECIPIENT"
	fi
fi

printf "\n"
