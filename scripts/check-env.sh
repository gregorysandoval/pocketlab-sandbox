#!/bash/bin

function checkEnv()
{
    echo "PL_CODEBUILD: $PL_CODEBUILD"
    echo "PL_ENV: $PL_ENV"
    if [[ -n "$PL_OVERRIDE_CHECK_ENV" ]]
    then
        now=$(date +%s)
        diff=$((now-$PL_OVERRIDE_CHECK_ENV))
        if [[ diff -lt 300 ]]
        then
            echo "ignoring environment check"
            return 0
        fi
    fi
    
    if [[ -z "$PL_ENV" ]]
    then
        echo "you MUST set PL_ENV?"
        echo "export PL_ENV=dev|prod|staging|beta|branch"
        return 1
    fi
    
    # if is not codebuild PL_ENV cannot be other than dev
    if [[ "$PL_CODEBUILD" != "true" && "$PL_ENV" != "dev" ]]
    then
        echo "PL_ENV is not dev, but not in codebuild?"
        echo "to ignore this check for 5 mins:"
        echo "export PL_OVERRIDE_CHECK_ENV=\$(date +%s)"
        return 1
    fi

    echo "OK"
    return 0
}

checkEnv
