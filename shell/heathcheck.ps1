vegeta attack -targets="./config/healthcheck.txt" -duration=60s -rate=100/s -insecure -output="healthcheck.gob"
vegeta report "healthcheck.gob"
vegeta plot "healthcheck.gob" > plot.html